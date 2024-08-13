import { useState } from "react";
import s from "./Precondition.module.scss";

import Button from "../../components/UI/Button/Button";
import Loading from "../../components/UI/Loading/Loading";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { preconditionSlice } from "../../reducers/precondition";

type Language = "Ru" | "En";

const Precondition = () => {
  const [language, setLanguage] = useState<Language>("Ru");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.langButton}>
        <Button
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              switch (language) {
                case "Ru":
                  setLanguage("En");
                  break;
                case "En":
                  setLanguage("Ru");
                  break;
              }
              setIsLoading(false);
            }, 400);
          }}
        >
          {language}
        </Button>
      </div>

      {isLoading ? <Loading /> : <></>}

      {language === "Ru" ? (
        <div className={s.text}>
          <div className={s.title}>Предусловие</div>
          <div className={s.contentText}>
            Данные проект ещё находится в разработке. <br />
            Реализован с помощью{" "}
            <a href="https://fakestoreapi.com/">Fake Store Api</a>. Все товары
            ненастоящие! <br />
            Некоторый функционал нереализован из-за проблем API. Например, на
            данный момент нельзя получить информацию пользователя по токену (
            <a href="https://github.com/keikaavousi/fake-store-api/issues/137">
              issue
            </a>
            ).
            <div className={s.contentButtonWrapper}>
              <Button
                onClick={() => {
                  dispatch(preconditionSlice.actions.check());
                  navigate("/");
                }}
              >
                Далее
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.text}>
          <div className={s.title}>precondition</div>
          <div className={s.contentText}>
            This project is still in development. <br />
            Realized with the{" "}
            <a href="https://fakestoreapi.com/">Fake Store Api</a>. All data and
            products fake! <br />
            Some functionality is not implemented due to API issues. For
            example, at the moment you cannot get user information from API via
            token (
            <a href="https://github.com/keikaavousi/fake-store-api/issues/137">
              issue
            </a>
            ).
            <div className={s.contentButtonWrapper}>
              <Button
                onClick={() => {
                  dispatch(preconditionSlice.actions.check());
                  navigate("/login");
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Precondition;
