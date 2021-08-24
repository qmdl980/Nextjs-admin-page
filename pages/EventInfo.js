import InputField from "../components/InputField";
import SelectBox from "../components/SelectBox";
import TextBox from "../components/TextBox";
import ToolTip from "../components/ToolTip";

function changeAgreementVisual() {

    var section = document.getElementById("agreement-section");
    var select = document.getElementById("select-agreement");

    var selectValue = select.options[select.selectedIndex].value;
    if (selectValue == 2) {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

const EventInfo = props => (

    <div style={{position: "absolute", left: "25%"}}>
        <h1 style={{
            align: "center",
            fontSize: "2rem",
            color: "#808080"
        }}>
            행사정보 입력</h1>
        <div style={{marginTop: "20px", width: "fit-content"}}>
            <InputField title={"행사명 *"} type={"text"} className={"inputBox1"}></InputField>
            <InputField title={"행사코드 *"} type={"text"} className={"inputBox1"}></InputField>
            <ToolTip
                text={"PSA시스템을 함께 사용하시는 경우, PSA시스템에 입력하셨던 행사 코드와 동일하게 설정해주세요.\n PSA시스템의 데이터를 확인하실 수 있습니다."}></ToolTip>

        </div>
        <div style={{marginTop: "10px", width: "fit-content"}}>
            <InputField title={"시작일 *"} type={"date"} className={"inputBox1"}></InputField>
            <InputField title={"종료일 *"} type={"date"} className={"inputBox1"}></InputField>
        </div>
        <div style={{marginTop: "10px", width: "fit-content"}}>
            <TextBox title={"행사도메인"} className={"inputBox2"} text={"https://domain.virtualseoul.or.kr"}></TextBox>
            <ToolTip text={"행사 도메인은 virtualseoul.or.kr의 sub domain으로 생성됩니다.\n" +
            "자체 도메인으로 설정을 하고 싶으시면, 서울관광 재단 담당자에게 연락 주세요.(vsp@sto.or.kr / 02-3788-0896)\n"}></ToolTip>

        </div>
        <div style={{marginTop: "10px", width: "fit-content"}}>
            <TextBox title={"기준시간대"} className={"inputBox1"} text={"GMT +09 KOREA"}></TextBox>
            <SelectBox title={"언어 선택 *"} name={"언어 선택"} className={"inputBox1"}
                       option1={"한국어"} option2={"영어"} option3={"한국어 + 영어"}></SelectBox>


        </div>
        <div style={{marginTop: "10px", width: "fit-content"}}>
            <div style={{display: "inline-block", marginRight: "20px"}}>
                <p className="inputTitle">
                    참가자 등록 *</p>
                <select className={"inputBox2"} name={"참가자 등록"} id={"select-agreement"}
                        onChange={()=>{changeAgreementVisual();}}>
                    <option value="">참가자 등록</option>
                    <option value={1}>참가자DB 직접 등록</option>
                    <option value={2}>버추얼 서울에서 회원가입 및 로그인</option>
                    <option value={3}>별도 로그인 없이 버추얼 서울 접속</option>
                </select>
            </div>
            <ToolTip text={"로그인이 필요한 무료 행사의 경우는 회원가입에 필요한 ‘개인정보 이용동의서’ 및 ‘마케팅 활용 동의서＇를 입력해 주세요.\n" +
            "유료행사(Ticketed)는 본 플랫폼에서 회원가입을 하지 않으며 별도 수집된 회원 DB를 업로드하여 사용합니다.\n" +
            "유,무료 동시 진행하는 행사는 ‘Ticketed’로 이벤트를 생성하시면 됩니다.\n"}></ToolTip>
            <div className={"agreement-section"} id={"agreement-section"}>
                <InputField title={"개인정보 이용 동의서"} type={"text"} className={"inputBox2"}
                            placeholder={"- 개인정보 이용 동의서 입력 -"}></InputField>
                <InputField title={"마케팅 활용 동의서"} type={"text"} className={"inputBox2"}
                            placeholder={"- 마케팅 활용 동의서 입력 -"}></InputField>
            </div>


        </div>
        <button className={"create-btn"}>이벤트 생성</button>
        <div style={{height: "150px"}}></div>


        <style jsx>{`
          div {
            font-family: 'Noto Sans KR', sans-serif;
          }

          .agreement-section {
            width: 540px;
          }

          .create-btn {
            position: absolute;
            left: 35%;
            width: 155px;
            height: 50px;
            color: #635dff;
            font-style: normal;
            font-weight: bolder;
            font-size: 1em;
            line-height: 22px;
            background-color: #e1e0ff;
            border: none;
            border-radius: 5px;
            margin-top: 30px;
          }

          .inputTitle {
            font-size: 14px;
            width: fit-content;
            font-weight: bold;
            font-family: 'Noto Sans', sans-serif;
          }

          .inputBox1 {
            border: 2px solid #C0C0C5;
            box-sizing: border-box;
            border-radius: 5px;
            width: 260px;
            height: 40px;
            font-family: 'Noto Sans', sans-serif;
          }

          .inputBox2 {
            border: 2px solid #C0C0C5;
            box-sizing: border-box;
            border-radius: 5px;
            width: 540px;
            height: 40px;
            font-family: 'Noto Sans', sans-serif;
          }
        `}
        </style>

    </div>
)
export default EventInfo;