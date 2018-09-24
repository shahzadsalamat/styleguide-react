import React from "react";

export const Clock = ({ myClases }) => {
  return (
    <svg
      className={myClases}
      id="clock"
      viewBox="0 0 30 30"
      width="100%"
      height="100%"
    >
      <title>clock</title>
      <g>
        <path
          d="M15 29C7.26791 29 1 22.7341 1 15C1 7.27005 7.26809 1 15 1C22.7319 1 29 7.27005 29 15C29 22.7341 22.7321 29 15 29Z"
          strokeWidth="2"
        />
        <path d="M8 10H0V0" transform="translate(14 8)" strokeWidth="2" />
      </g>
    </svg>
  );
};

export const Hearth = ({ myClases }) => {
  return (
    <svg
      className={myClases}
      id="clock"
      viewBox="0 0 30 29"
      width="100%"
      height="100%"
    >
      <title>hearth</title>
      <g>
        <path
          d="M14.0942 5.1012L15.0011 7.03938L15.9061 5.10039C17.1949 2.33951 19.9307 1 21.9231 1C23.8316 1 25.5972 1.62235 26.8751 2.79734C28.1387 3.95923 29 5.72891 29 8.18548C29 10.306 28.1662 12.5528 26.821 14.7794C25.4809 16.9977 23.677 19.1237 21.8433 20.9827C20.0128 22.8385 18.1744 24.4064 16.7841 25.5102C16.0895 26.0617 15.5097 26.495 15.1026 26.7881C15.0543 26.8229 15.0086 26.8555 14.9656 26.8861C14.9297 26.8637 14.892 26.84 14.8526 26.815C14.4488 26.5595 13.8725 26.1787 13.1816 25.6861C11.7982 24.6997 9.96771 23.2738 8.14494 21.5167C4.45217 17.9568 1 13.238 1 8.18548C1 3.70589 4.38518 1.0818 8.07012 1.00035C10.1918 1.07771 12.8364 2.41274 14.0942 5.1012Z"
          transform="translate(0 0.467773)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const Source = ({ myClases }) => {
  return (
    <svg
      className={myClases}
      id="source"
      viewBox="0 0 50 50"
      width="100%"
      height="100%"
    >
      <title>source</title>
      <g>
        <path
          d="M0 20C5.33333 14.4772 5.33333 5.52285 0 0"
          transform="translate(16 15)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M0 30C8 21.7157 8 8.28427 0 0"
          transform="translate(30 10)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const BurgerMenu = ({ myClases }) => (
  <svg
    className={myClases}
    id="menu"
    viewBox="0 0 42 34"
    width="100%"
    height="100%"
  >
    <title>menu</title>
    <path
      d="M0 1H40"
      transform="translate(1 32)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M0 1H30"
      transform="translate(1 16)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M0 1H40"
      transform="translate(1)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const LargeLogo = ({ myClases }) => (
  <svg
    className={myClases}
    id="gb-logo-large"
    viewBox="0 0 101 13"
    width="100%"
    height="100%"
  >
    <title>gb-logo-large</title>
    <path d="M7.456,6.089l0,1.646l1.843,0l0,1.449c-0.208,0.215 -1.371,1.33 -3.072,1.33c-2.338,0 -4.035,-1.811 -4.035,-4.307c0,-2.489 1.699,-4.227 4.131,-4.227c1.847,0 3.09,1.063 3.102,1.073l0.114,0.1l0.949,-1.405l-0.081,-0.078c-0.059,-0.057 -1.481,-1.4 -4.213,-1.4c-3.366,0 -5.904,2.566 -5.904,5.969c0,3.421 2.449,6.001 5.696,6.001c1.766,0 2.913,-0.821 3.364,-1.216c-0.002,0.059 -0.003,0.122 -0.003,0.185l0,0.839l1.662,0l0,-5.959l-3.553,0Z" />
    <path d="M15.883,10.402l0,-9.94l-1.854,0l0,11.586l6.92,0l0,-1.646l-5.066,0Z" />
    <path d="M41.08,5.224l-2.239,0l0,-3.116l2.207,0c0.98,0 1.566,0.574 1.566,1.534c0,0.946 -0.617,1.582 -1.534,1.582m0.176,5.178l-2.415,0l0,-3.596l2.399,0c1.107,0 1.823,0.708 1.823,1.806c0,1.104 -0.692,1.79 -1.807,1.79m1.983,-4.493c0.794,-0.512 1.261,-1.401 1.261,-2.427c0,-1.835 -1.342,-3.02 -3.42,-3.02l-4.093,0l0,11.586l4.189,0c2.292,0 3.773,-1.318 3.773,-3.356c0,-1.292 -0.663,-2.356 -1.71,-2.783" />
    <path d="M55.118,0.462l0,7.412c0,1.653 -1.029,2.64 -2.752,2.64c-1.703,0 -2.72,-0.975 -2.72,-2.608l0,-7.444l-1.854,0l0,7.444c0,2.592 1.845,4.334 4.591,4.334c2.745,0 4.59,-1.742 4.59,-4.334l0,-7.444l-1.855,0Z" />
    <path d="M62.499,10.402c-0.232,0 -0.42,0.005 -0.562,0.012c0.155,-0.18 0.389,-0.466 0.639,-0.828l5.475,-7.906l0,-1.218l-8.219,0l0,1.646l5.264,0c0.226,0 0.412,-0.008 0.553,-0.017c-0.155,0.182 -0.384,0.469 -0.631,0.834l-5.474,7.889l0,1.234l8.571,0l0,-1.646l-5.616,0Z" />
    <path d="M73.032,10.402c-0.232,0 -0.421,0.005 -0.562,0.012c0.155,-0.18 0.388,-0.466 0.639,-0.828l5.475,-7.906l0,-1.218l-8.219,0l0,1.646l5.264,0c0.226,0 0.412,-0.008 0.553,-0.017c-0.155,0.182 -0.385,0.469 -0.631,0.834l-5.475,7.889l0,1.234l8.572,0l0,-1.646l-5.616,0Z" />
    <path d="M83.345,10.402l0,-3.372l4.056,0l0,-1.646l-4.056,0l0,-3.276l4.986,0l0,-1.646l-6.84,0l0,11.586l7.113,0l0,-1.646l-5.259,0Z" />
    <path d="M93.334,2.108l1.693,0c0.862,0 1.21,0.093 1.49,0.24c0.543,0.301 0.83,0.865 0.83,1.631c0,1.183 -0.717,1.918 -1.871,1.918l-2.142,0l0,-3.789Zm4.182,5.348c-0.107,-0.189 -0.194,-0.322 -0.255,-0.408c1.204,-0.467 1.972,-1.678 1.972,-3.134c0,-1.504 -0.764,-2.725 -1.995,-3.187c-0.442,-0.163 -0.958,-0.265 -2.162,-0.265l-3.597,0l0,11.586l1.855,0l0,-4.505l2.206,0l2.389,4.505l2.101,0l-2.514,-4.592Z" />
    <path d="M27.422,3.325l-0.086,0.007l-0.017,0.083l-0.065,0.041l-0.106,0.008c-0.003,-0.024 -0.006,-0.043 -0.006,-0.043l-0.041,0l0,-0.089l0.172,0l0.036,-0.091l0.068,-0.002l0.078,0.016l-0.033,0.07Zm-0.438,0.153l-0.125,0.01l0.007,-0.086l0.055,-0.07l0.076,0.059l-0.013,0.087Zm3.26,-0.738l0.12,-0.192l0.161,-0.037l0.115,0.049l-0.01,0.13l-0.247,0.175l-0.139,0l0,-0.125Zm0.323,-0.374l0.055,-0.085l0.197,-0.039l0.05,0.239l0.105,0.169l0.07,0.081l0.127,0.049l-0.12,0.142l-0.232,0.023l-0.174,0l0.02,-0.207l0.144,-0.03l-0.012,-0.098l-0.135,-0.084l-0.095,-0.065l0,-0.095Zm1.684,2.139l0.104,0.075l0.098,0l0,-0.187l0.306,-0.03l0.291,0.217l0.479,0l0.034,-0.031c-0.048,-0.161 -0.102,-0.32 -0.162,-0.475l-0.313,0.005l-0.157,-0.172l-0.03,-0.277l-0.161,0.088l-0.086,0.338l-0.232,-0.247l-0.009,-0.233l-0.224,-0.193l-0.083,-0.081l-0.26,0l0.083,0.23l0.312,0.175l0.054,0.057l-0.067,0.034l0.003,0.183l-0.153,0.064l-0.13,-0.028l-0.081,-0.116l0.211,0.012l0.058,-0.077l-0.469,-0.316l-0.036,-0.135l-0.19,0.172l-0.193,-0.039l-0.293,0.382l-0.058,0.149l-0.188,0.017l-0.278,0.002l-0.166,-0.078l-0.049,-0.33l0.06,-0.157l0.282,-0.062l0.309,0.062l0.037,-0.171l-0.131,-0.03l0.045,-0.267l0.311,-0.048l0.216,-0.307l0.224,-0.037l0.203,0.029l0.074,0l-0.04,-0.287l-0.246,0.099l-0.087,-0.215l-0.143,-0.02l-0.026,-0.148l0.116,-0.126l0.277,-0.109l0.071,-0.127c-1.058,-0.932 -2.444,-1.499 -3.961,-1.499c-1.317,0 -2.534,0.427 -3.525,1.149l0.303,-0.002l0.134,0.074l0.254,0.055l0.02,0.1l0.404,0.015l-0.055,-0.13l-0.359,-0.01l0.085,-0.08l-0.029,-0.094l-0.325,0l0.354,-0.265l0.339,0l0.159,0.22l0.265,0.015l0.16,-0.155l0.119,0.06l-0.219,0.214c0,0 -0.304,0.005 -0.29,0.005c0.016,0 0.026,0.21 0.026,0.21l0.369,-0.011l0.039,-0.099l0.255,-0.015l0.03,-0.149l-0.15,-0.026l0.05,-0.134l0.115,-0.035l0.398,0.02l-0.219,0.2l0.035,0.154l0.229,0.035l-0.015,-0.279l0.22,-0.115l0.389,-0.045l0.563,0.25l0,0.214l0.18,0.045l-0.09,0.169l-0.254,0l-0.075,0.194l-0.582,-0.137l0.457,-0.243l-0.174,-0.148l-0.394,0.05l-0.035,0.036l-0.001,-0.001l-0.007,0.009l-0.113,0.118l-0.187,0.016l0.015,0.093l0.065,0.027l-0.002,0.031l-0.153,0.021l-0.011,0.088l-0.146,0.008l-0.026,-0.175l-0.262,0.079l-0.534,0.313l0.059,0.221l0.15,0.097l0.299,0.041l0,0.341l0.138,-0.023l0.128,-0.266l0.318,-0.1l0,-0.408l0.176,-0.133l0.428,0.1l-0.03,0.27l0.115,0l0.314,-0.155l0.015,0.354l0.229,0.14l-0.01,0.209l-0.219,0.075l0.015,0.07l0.264,0.119l-0.005,0.145l-0.077,0.007c0,-0.003 -0.001,-0.004 -0.001,-0.004l-0.333,-0.103l-0.014,-0.107l0,0l0.097,-0.067l0,-0.098l-0.105,-0.025l-0.026,0.089l-0.184,0.028l-0.018,-0.006l0,0.01l-0.063,0.01l-0.052,-0.106l-0.061,-0.025l-0.131,0l-0.059,0.048l0,0.108l0.112,0.038l0.11,0.015l-0.024,0.011l-0.101,0.112l-0.044,-0.056l-0.098,-0.026l-0.266,0.25l0.035,0.029l-0.392,0.217l-0.369,0.384l-0.026,0.171l-0.37,0.243l-0.183,0.184l0.02,0.369l-0.254,-0.118l0.002,-0.216l-0.708,0l-0.366,0.186l-0.159,0.293l-0.064,0.233l0.103,0.225l0.289,0.036l0.459,-0.308l0.04,0.153l-0.139,0.264l0.349,0.06l0.035,0.54l0.478,0.081l0.304,-0.352l0.369,0.075l0.13,0.181l0.354,-0.021l0.01,-0.105l0.194,0.095l0.22,0.344l0.378,0.005l0.14,0.244l0.02,0.299l0.419,0.16l0.528,0.005l0.155,0.254l0.235,0.075l-0.046,0.21l-0.256,0.326l-0.075,0.722l-0.232,0.183l-0.344,-0.01l-0.115,0.199l0.085,0.374l-0.374,0.479l-0.119,0.219l-0.357,0.172l-0.235,0.035l-0.009,0.1l0.164,0.047l-0.02,0.107l-0.147,0.142l0.09,0.113l0.177,0.005l-0.01,0.137l-0.047,0.134l-0.015,0.11l0.262,0.221l-0.035,0.115l-0.357,-0.007l-0.355,-0.311l-0.277,-0.486l0.039,-0.469l-0.21,-0.28l0.085,-0.473l-0.124,-0.035l0,-1.027c0,0 -0.35,-0.265 -0.369,-0.265c-0.02,0 -0.185,-0.044 -0.185,-0.044l-0.035,-0.195l-0.453,-0.568l0.044,-0.205l0.015,-0.334l0.314,-0.219l-0.045,-0.374l-0.458,-0.035l-0.359,-0.409l-0.255,-0.07l-0.164,-0.029l0.02,-0.15l-0.21,-0.03l0,0.085l-0.523,-0.13l-0.211,-0.322l0.086,-0.156l-0.331,-0.484l-0.058,-0.354l-0.134,0l0.045,0.343l0.229,0.355l-0.025,0.14l-0.194,-0.03l-0.24,-0.408l0,-0.475l-0.249,-0.12l0,-0.341c-0.308,0.721 -0.479,1.515 -0.479,2.348c0,3.308 2.692,6 6,6c1.876,0 3.552,-0.866 4.654,-2.218l-0.198,0l0,-0.398l-0.229,-0.309l0,-0.479l-0.175,-0.175l-0.015,-0.2l0.222,-0.423l-0.422,-0.743l0.05,-0.504l-0.378,-0.04l-0.14,-0.139l-0.255,0l-0.129,0.119l-0.449,0l-0.015,0.04l-0.249,0l-0.573,-0.653l0.004,-0.508l0.095,-0.035l0.035,-0.195l-0.134,0l-0.055,-0.204l0.663,-0.479l0,-0.339l0.324,-0.18l0.132,0.013l0.267,0l0.209,-0.112l0.673,-0.053l0,0.345l0.532,0.134Z" />
  </svg>
);

export const SmallLogo = ({ myClases }) => (
  <svg className={myClases} id="gb-logo-small" viewBox="0 0 50 51">
    <title>gb-logo-small</title>
    <path d="M44.4261 18.0367L44.8645 18.3499H45.3029V17.5356L46.6181 17.4104L47.8707 18.3499H49.8748L50 18.2246C49.8121 17.5358 49.5616 16.8468 49.3111 16.2206H47.9959L47.307 15.469L47.1818 14.2791L46.4929 14.6548L46.1171 16.0952L45.1151 15.0306L45.0524 14.0286L44.113 13.2144L43.7372 12.8386H42.6725L43.0483 13.8407L44.3635 14.5922L44.614 14.8428L44.3009 15.0306V15.7821L43.6746 16.0326L43.111 15.9073L42.7978 15.4064L43.6746 15.469L43.9251 15.1559L41.921 13.8407L41.7958 13.277L40.9816 14.0286L40.1675 13.8407L38.9149 15.469L38.6644 16.0952L37.8502 16.158H36.6603L35.9714 15.8447L35.7835 14.4669L36.0341 13.7781L37.2239 13.5276L38.5391 13.7781L38.7271 13.0265L38.1634 12.9012L38.3513 11.7739L39.6664 11.5861L40.6058 10.2709L41.5453 10.083L42.4221 10.2083H42.7352L42.5473 9.01831L41.4827 9.45679L41.1069 8.57996L40.4806 8.51733L40.3553 7.89111L40.8564 7.32739L42.0463 6.88904L42.3594 6.32544C37.9128 2.37988 32.0259 0 25.6379 0C20.064 0 14.9286 1.81616 10.7325 4.82227H11.985L12.5487 5.1355L13.6134 5.38599L13.676 5.82434L15.3669 5.88696L15.1165 5.32336L13.6134 5.26074L13.9891 4.94763L13.8639 4.57178H12.4861L13.9891 3.44446H15.4296L16.1185 4.38391L17.2458 4.44653L17.9347 3.82031L18.4357 4.0708L17.4963 4.94763H16.3064C16.369 4.94763 16.4316 5.82434 16.4316 5.82434L17.9973 5.76172L18.1852 5.32336L19.2499 5.26074L19.3751 4.6344L18.7488 4.50916L18.9367 3.94556L19.4377 3.82031L21.1287 3.88293L20.1893 4.69702L20.3145 5.32336L21.254 5.44861L21.1913 4.25867L22.1307 3.75769L23.759 3.56982L26.1389 4.6344V5.51123L26.8904 5.6991L26.5146 6.38806H25.5126L25.1995 7.20215L22.757 6.63855L24.6985 5.63647L23.9469 5.01025L22.256 5.19812L22.1307 5.32336V5.38599L21.6297 5.88696L20.8156 5.94958L20.8782 6.32544L21.1287 6.45068V6.57593L20.5024 6.63855L20.4398 7.01428L19.8135 7.0769L19.6882 6.32544L18.6236 6.88904L16.369 8.20422L16.6195 9.14368L17.2458 9.58203L18.4984 9.7699V11.2103L19.062 11.0851L19.6256 9.95776L20.9408 9.51941V7.82849L21.6923 7.26477L23.5085 7.70312L23.3833 8.83044H23.8843L25.1995 8.20422L25.2621 9.70728L26.2015 10.2709L26.1389 11.1477L25.1995 11.4608L25.2621 11.7739L26.3894 12.275V12.9012H26.0763L24.6985 12.4629L24.6358 12.0245L25.0742 11.7113V11.2729L24.6358 11.1477L24.5106 11.5234L23.759 11.6487H23.6964V11.7113L23.4459 11.7739L23.1954 11.3356L22.9449 11.2103H22.3812L22.1307 11.3982V11.8365L22.6318 12.0245L23.0701 12.0872L22.9449 12.1498L22.5065 12.6508L22.3186 12.4003L21.8802 12.275L20.7529 13.3397L20.8782 13.465L19.2499 14.4043L17.6842 16.0326L17.5589 16.7842L15.9932 17.7863L15.2417 18.5377L15.3043 20.1034L14.2397 19.6024V18.663H11.2335L9.66785 19.4146L8.97894 20.6671L8.72845 21.6691L9.16681 22.6085L10.3568 22.7338L12.2982 21.4186L12.4861 22.0449L11.9224 23.1722L13.4255 23.4227L13.5508 25.6772L15.5549 25.9905L16.87 24.4873L18.4357 24.8005L18.9993 25.552L20.5024 25.4894L20.5651 25.051L21.3792 25.4268L22.3186 26.8672H23.9469L24.5106 27.8693L24.5732 29.1218L26.3268 29.8107H28.5814L29.2076 30.8754L30.2097 31.1885L30.0218 32.0653L28.9572 33.4431L28.644 36.5118L27.642 37.2634L26.2015 37.2008L25.7005 38.0149L26.0763 39.5806L24.5106 41.5847L24.0096 42.524L22.5065 43.2756L21.5045 43.4009L21.4418 43.8392L22.1307 44.0271L22.0681 44.4656L21.4418 45.0918L21.8176 45.5928H22.5692L22.5065 46.1565L22.3186 46.7201L22.256 47.1586L23.3833 48.0979L23.2581 48.599H21.7549L20.2519 47.2838L19.062 45.217L19.2499 43.213L18.3731 42.0231L18.7488 40.019L18.2478 39.8937V35.5724C18.2478 35.5724 16.7448 34.4452 16.6821 34.4452C16.6195 34.4452 15.9306 34.2572 15.9306 34.2572L15.8054 33.4431L13.8639 31.0632L14.0518 30.1865L14.1144 28.7461L15.4296 27.8066L15.2417 26.241L13.3002 26.1157L11.7972 24.3621L10.7325 24.049L10.0436 23.9237L10.1063 23.2975L9.22949 23.1722V23.548L7.03748 22.9843L6.16071 21.6064L6.5365 20.9176L5.15869 18.8508L4.90814 17.3478H4.34454L4.53241 18.7882L5.4718 20.2913L5.34656 20.855L4.53241 20.7297L3.53033 18.9762V16.972L2.4657 16.4711V15.0306C1.15051 18.0994 0.461609 21.4186 0.461609 24.9258C0.461609 38.8917 11.7972 50.2273 25.7631 50.2273C33.6542 50.2273 40.7311 46.5948 45.4282 40.8331H44.614V39.1422L43.6746 37.827V36.324L42.9231 35.5724L42.8605 34.7583L43.7999 32.9421L42.0463 29.8107L42.2342 27.6814L40.6058 27.4935L40.0422 26.9298H38.9775L38.4139 27.4309H36.535L36.4724 27.6188H35.4078L32.9653 24.8632V22.7338L33.3411 22.6085L33.4663 21.7944H32.9026L32.6522 20.9176L35.4704 18.9135V17.473L36.8482 16.7216L37.4119 16.7842H38.5391L39.416 16.2832L42.2342 16.0326V17.473L44.4261 18.0367ZM37.5371 8.64258L38.3513 8.45471L38.5392 9.45679L38.9775 10.1456L39.2907 10.4587L39.8544 10.6467L39.3533 11.2729L38.3513 11.3982H37.5997L37.6624 10.5214L38.2886 10.3961L38.226 9.95776L37.6624 9.58203L37.2866 9.33154V9.01831L37.5371 8.64258ZM36.4725 9.7699L35.9714 10.5841V11.0851H36.5351L37.5997 10.3336L37.6624 9.7699L37.1614 9.58203L36.4725 9.7699ZM22.1934 13.7153L21.6923 13.778V13.4022L21.9428 13.0891L22.256 13.3396L22.1934 13.7153ZM23.6338 13.0265H24.0096L24.1974 12.776L23.8843 12.7134H23.5712L23.4459 13.0891H22.6944V13.465H22.8823V13.6528L23.3207 13.5902L23.5712 13.4022L23.6338 13.0265Z" />
  </svg>
);

export const Close = ({ myClases }) => (
  <svg
    className={myClases}
    id="close"
    viewBox="0 0 38 37"
    width="100%"
    height="100%"
  >
    <title>close</title>
    <path
      d="M34.0523 34.8114L0 0"
      transform="translate(36.187 1.01245) rotate(90)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M0 34.8114L34.0523 0"
      transform="translate(36.187 1.01245) rotate(90)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const Facebook = ({myClases}) => (
  <svg className={myClases} id="facebook" viewBox="0 0 16 16" width="100%" height="100%">
      <title>facebook</title>
      <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z"></path>
    </svg>
)

export const Twitter = ({myClases}) => (
  <svg className={myClases} id="twitter" viewBox="0 0 16 16" width="100%" height="100%">
      <title>twitter</title>
      <path d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"></path>
    </svg>
)

export const Instagram = ({myClases}) => (
  <svg className={myClases} id="instagram" viewBox="0 0 20 20" width="100%" height="100%">
      <title>instagram</title>
      <path d="M17 1h-14c-1.1 0-2 0.9-2 2v14c0 1.101 0.9 2 2 2h14c1.1 0 2-0.899 2-2v-14c0-1.1-0.9-2-2-2zM9.984 15.523c3.059 0 5.538-2.481 5.538-5.539 0-0.338-0.043-0.664-0.103-0.984h1.581v7.216c0 0.382-0.31 0.69-0.693 0.69h-12.614c-0.383 0-0.693-0.308-0.693-0.69v-7.216h1.549c-0.061 0.32-0.104 0.646-0.104 0.984 0 3.059 2.481 5.539 5.539 5.539zM6.523 9.984c0-1.912 1.55-3.461 3.462-3.461s3.462 1.549 3.462 3.461-1.551 3.462-3.462 3.462c-1.913 0-3.462-1.55-3.462-3.462zM16.307 6h-1.615c-0.382 0-0.692-0.312-0.692-0.692v-1.617c0-0.382 0.31-0.691 0.691-0.691h1.615c0.384 0 0.694 0.309 0.694 0.691v1.616c0 0.381-0.31 0.693-0.693 0.693z"></path>
    </svg>
)

export const News = ({myClases}) => (
  <svg className={myClases} id="news" viewBox="0 0 50 50" width="100%" height="100%">
      <title>news</title>
      <g>
        <path d="M1 1H7.51064V7.83889H1V1Z" transform="translate(4 7)" strokeWidth="2"></path>
        <path d="M1 1H7.51064V7.83889H1V1Z" transform="translate(4 21.0601)" strokeWidth="2"></path>
        <path d="M1 1H7.51064V7.83889H1V1Z" transform="translate(4 35.1611)" strokeWidth="2"></path>
        <path d="M0 1H26" transform="translate(19.3191 11.3032)" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M0 1H26" transform="translate(19.3191 25.3633)" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M0 1H26" transform="translate(19.3191 38.5806)" strokeWidth="2" strokeLinecap="round"></path>
      </g>
    </svg>
)

export const Bookmarks = ({myClases}) => (
  <svg className={myClases} id="bookmarks" viewBox="0 0 50 50" width="100%" height="100%">
      <title>bookmarks</title>
      <g>
        <path d="M20.536 30.1142L1 40.3473V1H41V40.3473L21.464 30.1142C21.1734 29.9619 20.8266 29.9619 20.536 30.1142Z" transform="translate(4 4)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path>
        <path d="M0 1H16" transform="translate(17 14)" strokeWidth="2" strokeLinecap="square"></path>
      </g>
    </svg>
)

export const Calendar = ({myClases}) => (
  <svg className={myClases} id="calendar" viewBox="0 0 50 50" width="100%" height="100%">
      <title>calendar</title>
      <g>
        <path d="M1 2C1 1.44772 1.44772 1 2 1H42C42.5523 1 43 1.44772 43 2V42C43 42.5523 42.5523 43 42 43H2C1.44772 43 1 42.5523 1 42V2Z" transform="translate(3 3)" strokeWidth="2"></path>
        <path d="M0 0.5H24.7704" transform="translate(12.4814 12.7778)" strokeWidth="2" strokeLinecap="square"></path>
        <path d="M1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5Z" transform="translate(10.6333 21)" strokeWidth="2"></path>
        <path d="M1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5Z" transform="translate(21.6333 21)" strokeWidth="2"></path>
        <path d="M1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5Z" transform="translate(32.6333 21)" strokeWidth="2"></path>
        <path d="M1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5Z" transform="translate(10.6333 31.9165)" strokeWidth="2"></path>
        <path d="M1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5Z" transform="translate(21.6333 31.9165)" strokeWidth="2"></path>
        <path d="M1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5Z" transform="translate(33 31.9165)" strokeWidth="2"></path>
      </g>
    </svg>
)

export const Widgets = ({myClases}) => (
  <svg className={myClases} id="widgets" viewBox="0 0 50 50" width="100%" height="100%">
      <title>widgets</title>
      <g>
        <path d="M45 23C45 35.1503 35.1503 45 23 45C10.8497 45 1 35.1503 1 23C1 10.8497 10.8497 1 23 1C35.1503 1 45 10.8497 45 23Z" transform="translate(2 1)" strokeWidth="2"></path>
        <path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14" transform="translate(11 10)" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 4.5C8 6.433 6.433 8 4.5 8C2.567 8 1 6.433 1 4.5C1 2.567 2.567 1 4.5 1C6.433 1 8 2.567 8 4.5Z" transform="translate(25.2324 24.0249) rotate(45)" strokeWidth="2"></path>
        <path d="M2 5.8V0.136079" transform="translate(31.0461 22.0396) rotate(45)" strokeWidth="2" strokeLinecap="round"></path>
      </g>
    </svg>
)