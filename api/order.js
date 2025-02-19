const Order  =  [
  {
    id: '5',
    manager: '김용국',
    staff: ['김태양','김용국'],
    product: '30박스올냉장 WSM-830R-3D',
    location: '전라남도 목포시 호남동 10-44 한일약국',
    price: '840,000',
    payment: '미결제',
    status: '대기',
    memo:'일반사면을 명하려면 국회의 동의를 얻어야 한다. 대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.'
  },
  {
    id: '4',
    manager: '김용국',
    staff: 'kimyongkuk',
    product: '30박스올냉장 WSM-830R-3D',
    location: '전라남도 목포시 석현동 351 목포미래병원',
    price: '840,000',
    payment: '미결제',
    status: '배송중',
    memo:'대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다.'
  },
  {
    id: '3',
    manager: '김용국',
    staff: '김용국',
    product: '30박스올냉장 WSM-830R-3D',
    location: '전라남도 목포시 산정동 1731-6 예향정',
    price: '840,000',
    payment: '미결제',
    status: '배송완료',
    memo:'대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.'
  },
  {
    id: '2',
    manager: '김용국',
    staff: '김용국',
    product: '6자 냉장테이블 (LT-1834R)',
    location: '전라남도 목포시 산정동 1791-5 김가네손짜장',
    price: '840,000',
    payment: '결제완료',
    status: '배송완료',
    memo:'국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.'
  },
  {
    id: '1',
    manager: '김용국',
    staff: '김용국',
    product: '30박스올냉장 WSM-830R-3D',
    location: '전라남도 목포시 산정동 1772-4 목향식육식당',
    price: '840,000',
    payment: '결제완료',
    status: '배송완료',
    memo:'국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다. 대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다.'
  },
];

const getOrder = (limit) => {
  return (limit) ? Order .slice(0, limit) : Order ;
};


export {
  Order ,
  getOrder 
};