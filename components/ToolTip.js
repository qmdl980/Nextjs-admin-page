const ToolTip = props => (
    <div className={"tooltipDiv"}>
            <span className={"tooltip"} style={{fontSize: "22px"}}>&#x1F6C8;
                <span className={"tooltip-text"}>{props.text}</span>
        </span>

        <style jsx>{`
          .tooltipDiv {
            display: inline-block;
            position: absolute;
            left: 91%;
            font-family: 'Noto Sans KR', sans-serif;
          }

          .tooltip {
            margin-top: 40%;
            color: #808080;
            display: inline-block;
            
            font-family: 'Noto Sans', sans-serif;
            position: relative;
          }

          .tooltip-text {
            display: none;
            position: absolute;
            border: 1px solid #E1E0ff;
            border-radius: 5px;
            padding: 15px;
            font-size: 14px;
            color: black;
            background: #E1E0ff;
            width: 250px;
          }

          .tooltip:hover .tooltip-text {
            display: block;
          }

          .tooltip .tooltip-text {
            width: 300px;
            top: 150%;
            left: 50%;
            margin-left: -150px;
          }


          
        `}
        </style>
    </div>
)
export default ToolTip