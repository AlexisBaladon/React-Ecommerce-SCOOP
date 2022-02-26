interface IProps {
    color: string;
    width: string;
    height: string;
  }
  
  const LocationWidget = ({color, width, height}: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"  width={width} height={height}>
              <g  fill={color} stroke="none">
                <path d="M12,.042a9.992,9.992,0,0,0-9.981,9.98c0,2.57,1.99,6.592,5.915,11.954a5.034,5.034,0,0,0,8.132,0c3.925-5.362,5.915-9.384,5.915-11.954A9.992,9.992,0,0,0,12,.042ZM12,14a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z"/>
              </g>
            </svg>
  }
  
  export default LocationWidget;