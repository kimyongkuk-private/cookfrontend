const Projects =  [
  { id:'1',
    username: 'Dessie',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',
    name: '사원',
    title: '국가안전보장회의는 대통령이 주재한다. 모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다.',
    memo: '국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. 대법원과 각급법원의 조직은 법률로 정한다. 선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당 또는 후보자에게 부담시킬 수 없다. 헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.',
    color: 'pink', date: '2019-04-01'
  },
  { id:'2',
    username: 'Jakayla',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',    
    name: '사원',
    title: '모든 국민은 통신의 비밀을 침해받지 아니한다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.',
    memo: '대통령의 선거에 관한 사항은 법률로 정한다. 모든 국민은 거주·이전의 자유를 가진다. 신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다.',
    color: 'success', date: '2019-04-01'
  },
  { id:'3',
    username: 'Ludwiczakpawel',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',    
    name: '사원',
    title: '헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.',
    memo: '법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.',
    color: 'info', date: '2019-04-01'
  },
  { id:'4',
    username: 'Damenleeturks',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg',    
    name: '사원',
    title: '사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다.',
    memo: '모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.',
    color: 'teal', date: '2019-04-01'
  },
  { id:'5',
    username: 'Caspergrl',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/caspergrl/128.jpg',
    name: '사원',
    title: '감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그 결과를 보고하여야 한다.',
    memo: '국가안전보장회의는 대통령이 주재한다. 국가는 청원에 대하여 심사할 의무를 진다. 국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의 임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여 집회된다.',
    color: 'grey', date: '2019-04-01'
  },
  { id:'6',
    username: 'Caspergrl',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/caspergrl/128.jpg',
    name: '사원',
    title: '모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다.',
    memo: '국가안전보장회의는 대통령이 주재한다. 국가는 청원에 대하여 심사할 의무를 진다. 국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의 임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여 집회된다.',
    color: 'grey', date: '2019-04-01'
  },
  { id:'7',
    username: 'Caspergrl',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/caspergrl/128.jpg',
    name: '사원',
    title: '저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.',
    memo: '국가안전보장회의는 대통령이 주재한다. 국가는 청원에 대하여 심사할 의무를 진다. 국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의 임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여 집회된다.',
    color: 'grey', date: '2019-04-01'
  },

];

const getProject = (limit) => {
  return (limit) ? Projects.slice(0, limit) : Projects;
};


export {
  Projects,
  getProject
};