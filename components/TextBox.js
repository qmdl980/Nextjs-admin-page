const TextBox = props => (
    <div style={{display: "inline-block", marginRight: "20px"}}>
        <p className="inputTitle">
            {props.title}</p>
        <div className={props.className}>
            <p className={"customText"}>{props.text}</p>
        </div>

        <style jsx>{`
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
                line-height: 22px;
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
              .customText{
                margin:5px;
                font-family: 'Noto Sans', sans-serif;
                color:#808080
              }
            `}
        </style>
    </div>
)
export default TextBox






