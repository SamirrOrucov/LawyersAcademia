import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about_container">
        <div className="about_header">
          <img src="../src/assets/image/header.png" alt="" />
          <div className="about_header_gradient"></div>
        </div>
        <div className="about_main">
          <div className="about_main_title">
            <p>Haqqımızda</p>
            <div className="lines">
              <div className="line One"></div>
              <div className="line Two"></div>
              <div className="line Three"></div>
              <div className="line Four"></div>
              <div className="line Five"></div>
            </div>
          </div>
          <div className="about_contents">
            <div className="about_content">
              <p className="about_content_title">
                <span>Akademiyanın</span> Təsis Edilməsi:
              </p>
              <p className="about_content_desc">
                20 oktyabr 2023-cü il Vəkillər Kollegiyasının Rəyasət Heyətinin
                qərarı ilə təsis edilmişdir. Akademiyanın rektoru Həd., Prof.
                Əmir Əliyevdir.
              </p>
            </div>
            <div className="about_content">
              <p className="about_content_title">
                <span>Fəaliyyət</span> Sahələri:
              </p>
              <p className="about_content_desc">
                -Vəkillərin peşə hazırlığı və səviyyəsinin artırılması üçün
                tədbirlər.
                <br /> -Ixtisaslaşma tərəfdaşlığının dərinləşdirilməsi və
                beynəlxalq təlimlər. <br />
                -Beynəlxalq təcrübənin mənimsənilməsi və hüquqi maarifləndirmə.
                <br /> -Vəkil köməkçisi institutunun formalaşması və tədris
                tədbirləri. <br />
                -Vəkillik fəaliyyətini ümumiləşdirmək üçün statistika və
                məlumatlar. <br />
                -Beynəlxalq məhkəmə qərarlarının təhlili və dərci. <br />
                -Vəkillər arasında ixtisaslaşmanın əsasının yaradılması və
                təhsil proqramları. <br />
                -Hüquqi müsabiqələr, məktəblər və beynəlxalq təcrübə layihələri.{" "}
                <br />
                -Vəkillərin elmi və yaradıcılıq fəaliyyəti üçün tədbirlər.{" "}
                <br />
                -Vəkillərin peşə fəaliyyətinin yüksəldilməsi üçün yeni
                texnologiyaların tətbiqi.
              </p>
            </div>
            <div className="about_content">
              <p className="about_content_title">
                <span>Təşkilati </span>Sistem və İdarəetmə:
              </p>
              <p className="about_content_desc">
                Akademiyada 3 kafedra – mülki , cinayət , prosessual –
                kafedralar və hüquq klinikası fəaliyyət göstərir. Akademiya
                20-dən çox elmlər doktorunu, 50-dən artıq fəlsəfə doktorunu
                özündə birləşdirir.Akademiyaya rektor rəhbərlik edir.
              </p>
            </div>
            <div className="about_content">
              <p className="about_content_title">
                <span>Ünvan</span> və Əlaqə:
              </p>
              <p className="about_content_desc">
                Akademiya Bakı şəhəri, Nəsimi rayonu, Səməd Vurğun küçəsi 32
                ünvanında yerləşir. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
