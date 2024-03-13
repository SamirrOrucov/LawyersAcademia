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
            {/* <p>
              Azərbaycan Respublikası Vəkillər Kollegiyasının Akademiyası
              Vəkillər Kollegiyasının Rəyasət Heyətinin 20 oktyabr 2023-cü il
              qərarı ilə təsis edilmişdir. Akademiya Azərbaycan Respublikası
              Vəkillər Kollegiyasının nəzdində fəaliyyət göstərən qurum kimi
              aşağıdakı fəaliyyətləri həyata keçirir:<br/> - vəkillərin peşə
              hazırlığının artırılması və yüksək səviyyədə saxlanılması,<br/>  -
              ixtisaslaşmanın dərinləşdirilməsi,<br/>  - davamlı tədrisin və müxtəlif
              istiqamətlərdə ardıcıl və zəruri beynəlxalq təlimlərin təşkilinə
              dəstək verilməsi,<br/>  - beynəlxalq təcrübənin mənimsənilməsi,<br/>  - hüquqi
              maarifləndirmənin aparılması, <br/> - beynəlxalq konfransların
              keçirilməsi,<br/>  - müasir dövrün tələblərinə uyğun vəkilliyin inkişaf
              etdirilməsi üzrə qabaqcıl beynəlxalq təcrübənin öyrənilməsi,<br/>  -
              təhlili və tətbiqi, hüquqi maarifləndirmənin aparılması,<br/>  - vəkil
              köməkçisi institutunun formalaşması və inkişaf istiqamətləri üzrə
              kompleks tədbirlərin həyata keçirilməsinə dəstək verilməsi,
              tədrisin və davamlı treninqlərin təşkili üçün vəkillər və digər
              yüksək səviyyəli mütəxəssislərdən ibarət məlumat bazasının
              yaradılması, <br/> - vəkillik fəaliyyətinin ümumiləşdirilməsi üzrə
              mütəmadi dərclərin həyata keçirilməsi, qanunvericiliyin davamlı
              izlənilməsi və dövrü bülletenlərin işlənilməsi, <br/> - vəkillərin
              fəaliyyət göstəriciləri üzrə statistik təhlilin aparılması və bu
              istiqamətdə informasiya sisteminin qurulmasına dəstək verilməsi,<br/>  -
              hüquqi maarifləndirmə istiqamətində işlərin təşkili,<br/>  - elmi-hüquqi
              informasiyanın yayılması,<br/>  - hüquqi biliklərin təbliğinin təşkil
              edilməsi,<br/>  - vətəndaşlara, onların birliklərinə və hüquqi şəxslərə
              hüquq xidmətlərinin göstərilməsi,<br/>  - Akademiyanın və Vəkillər
              Kollegiyasının qanuni maraqlarının dövlət və ictimai birliklərdə
              təmsil edilməsi və müdafiə olunması,<br/>  - beynəlxalq elmi-təcrübi
              layihələrdə iştirak edilməsi,<br/>  - davamlı treninqlərin, təlimlərin
              və müxtəlif kursların təşkil edilməsi, <br/> - hüquqi müstəvidə
              konfrans, seminar, dəyirmi masa və s. tədbirlərin keçirilməsi,
              normayaradıcılıq prosesinə təkliflərlə töhfələrin verilməsi, <br/> -
              Vəkillər Kollegiyasının rəsmi jurnalının dərcinin davamlılığının
              təmin edilməsi,<br/>  - vəkillik fəaliyyətinin ümumiləşdirilməsi üzrə
              mütəmadi dərclərin və məlumatların verilməsi,<br/>  - vəkillərin
              qiymətləndirilməsində iştirak edilməsi və bu istiqamətdə müvafiq
              töhfələrin verilməsi,<br/>  - beynəlxalq məhkəmə qərarlarının təhlili və
              dərci,<br/>  - müxtəlif dövlət qurumlarında müvafiq ekspert rəylərinin
              təşkili,<br/>  - hüquq təhsili müəssisələri-fakültələri (o cümlədən
              ixtisaslaşdırılmış akademiya və ya tədris mərkəzləri) ilə sıx
              əməkdaşlığın qurulması,<br/>  - “hüquqşünaslıq” ixtisası üzrə kadrların
              hazırlanmasına töhfələrin verilməsi,<br/>  - Azərbaycan vəkilliyinin
              nailiyyətlərinin beynəlxalq cəmiyyətdə bölüşdürülməsi və əksinə,<br/>  -
              peşə hazırlığı üzrə müxtəlif istiqamətlərdə proqramların və
              metodik vəsaitlərin hazırlanması,<br/>  - vəkillik sahəsində
              ixtisaslaşmış beynəlxalq təşkilatlarla vəkilliyin inkişafına
              yönəlmiş layihələrinin həyata keçirilməsində iştirak edilməsi,<br/>  -
              Vəkillər Kollegiyası ilə Azərbaycan Respublikasının müxtəlif
              dövlət qurumları arasında mövcud müqavilələr çərçivəsində
              layihələrin işlənilməsi, <br/> - vəkillər arasında ixtisaslaşmanın
              əsasının yaradılması istiqamətində işin aparılması, <br/> - təhsil
              müəssisələri ilə birgə “Vəkillik hüququ” magistratura
              ixtisaslaşmasının yaradılması və bu istiqamətdə birgə kadr
              hazırlığı,<br/>  - hüquqşünaslıq ixtisası üzrə təhsil alan bakalavr və
              magistratura pillələri tələbələri ilə müxtəlif layihələrin,
              könüllülük fəaliyyətinin və s. qurulması,<br/>  - vəkillər arasında
              elmi-praktiki müsabiqələrin keçirilməsi, yay və qış məktəblərinin
              inkişafı,<br/>  - müxtəlif hüquqi məsələlərlə əlaqədar beynəlxalq
              təcrübənin öyrənilməsi üzrə tədbirlər və müvafiq rəylərin
              verilməsi,<br/>  - “Vəkillik hüququ” üzrə geniş tədris kursunun, hüquqi
              maarifləndirmə istiqamətində müxtəlif vəsaitlərin (kiçik və s.
              həcmli) buraxılması,<br/>  - vəkillik fəaliyyəti ilə əlaqədar beynəlxalq
              və milli hüquqi sənədlərin vahid sistemləşdirilməsinin aparılması,
              dərci,<br/>  - müxtəlif dövlətlərin vəkillik tədris qurumları ilə
              elmi-praktiki mübadilələrin təşkili,<br/>  - vəkillərin elmi və
              yaradıcılıq fəaliyyətinin inkişaf etdirilməsi üzrə tədbirlərin
              həyata keçirilməsi,<br/>  - hüquq fakültəsi tələbələrinin vəkil
              bürolarında staj və sınaq fəaliyyətinin tənzimlənməsi,<br/>  - müxtəlif
              konfranslar, görüşlər, simpoziumlar, kurslar, sərgilər,
              müsabiqələr və s. tədbirlərin təşkil edilməsi,<br/>  - vəkillərin peşə
              fəaliyyətinin yüksəldilməsi məqsədilə yeni texnologiyaların
              hazırlanması <br/> - Vəkillər Kollegiyası Rəyasət Heyətinin qərarı ilə
              həvalə edilən digər fəaliyyətlərin həyata keçirilməsi və s.<br/> 
              Akademiyada 3 kafedra – 1) mülki; 2) cinayət; 3) prosessual
              kafedralar və hüquq klinikası fəaliyyət göstərir. Akademiyaya
              rektor rəhbərlik edir. 20 oktyabr 2023-cü il Vəkillər
              Kollegiyasının Rəyasət Heyətinin qərarı ilə h.e.d., prof. Əmir
              Əliyev Akademiyanın rektoru təyin edilmişdir. Akademiya 20-dən çox
              elmlər doktorunu, 50-dən artıq fəlsəfə doktorunu özündə
              birləşdirir. Akademiya Bakı şəhəri, Nəsimi rayonu, Səməd Vurğun
              küçəsi 32 ünvanında yerləşir. Akademiyanın büdcəsi Vəkillər
              Kollegiyasının daxili imkanlarından edilən köçürmələr, ianə və
              qrantlar, göstərilən xidmətlərdən alınan haqq formalaşır hesabına
              formalaşır.
            </p> */}
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
                tədbirlər.<br/> -Ixtisaslaşma tərəfdaşlığının dərinləşdirilməsi və
                beynəlxalq təlimlər. <br/>-Beynəlxalq təcrübənin mənimsənilməsi və
                hüquqi maarifləndirmə.<br/> -Vəkil köməkçisi institutunun formalaşması
                və tədris tədbirləri. <br/>-Vəkillik fəaliyyətini ümumiləşdirmək üçün
                statistika və məlumatlar. <br/>-Beynəlxalq məhkəmə qərarlarının
                təhlili və dərci. <br/>-Vəkillər arasında ixtisaslaşmanın əsasının
                yaradılması və təhsil proqramları. <br/>-Hüquqi müsabiqələr, məktəblər
                və beynəlxalq təcrübə layihələri. <br/>-Vəkillərin elmi və yaradıcılıq
                fəaliyyəti üçün tədbirlər. <br/>-Vəkillərin peşə fəaliyyətinin
                yüksəldilməsi üçün yeni texnologiyaların tətbiqi.
              </p>
            </div>
            <div className="about_content">
              <p className="about_content_title">
                <span>Təşkilati </span>Yapı və İdarəetmə:
              </p>
              <p className="about_content_desc">
                Akademiyada 3 kafedra – 1) mülki; 2) cinayət; 3) prosessual
                kafedralar və hüquq klinikası fəaliyyət göstərir. Akademiya
                20-dən çox elmlər doktorunu, 50-dən artıq fəlsəfə doktorunu
                özündə birləşdirir.Akademiyaya rektor rəhbərlik edir. 20 oktyabr
                2023-cü il Vəkillər Kollegiyasının Rəyasət Heyətinin qərarı ilə
                h.e.d., prof. Əmir Əliyev Akademiyanın rektoru təyin edilmişdir.
              </p>
            </div>
            <div className="about_content">
              <p className="about_content_title">
                <span>Ünvan</span> və Büdcə:
              </p>
              <p className="about_content_desc">
                Akademiya Bakı şəhəri, Nəsimi rayonu, Səməd Vurğun küçəsi 32
                ünvanında yerləşir. Akademiyanın büdcəsi Vəkillər Kollegiyasının
                daxili imkanlarından edilən köçürmələr, ianə və qrantlar,
                göstərilən xidmətlərdən alınan haqq formalaşır hesabına
                formalaşır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
