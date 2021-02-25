import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../components/api";

const DetailContainer = props => {
  const [state, setstate] = useState({ loading: true, detail: null, error: "" });

  // 선택한 데이터 가져오기
  const getDetailData = async () => {
    const {
      match: {
        params: { id }
      },
      location: { pathname },
      history: { push }
    } = props;

    // id 값 체크
    if (isNaN(parseInt(id))) return push("/");

    try {
      let { data: detail } = pathname.includes("/movie/")
        ? await movieApi.getMovieDetail(id)
        : await tvApi.getTVDetail(id);
      setstate({
        detail,
        loading: false
      });
    } catch {
      // 에러시 메인 페이지 이동
      return push("/");
    }
  };

  useEffect(() => {
    getDetailData();
  });

  return <DetailPresenter loading={state.loading} detail={state.detail} error={state.error} />;
};

export default DetailContainer;
