import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/dist/css/bootstrap.css';
//import './css/fonts.css';
import './css/style.css';

const imageURL='./';
class App extends Component{
  constructor(props) {
    super(props);
    this.state={
        teamValue:-1,
        activityValue:-1,
        teamValues:[],
        teamActivityAreas:[],
        teams:[],
        users:[],
        getTeamTrue:false,
    }
  }
componentDidMount() {
this.getTeamValues();
console.warn("users",this.state.users);
}
getTeamValues=()=>{
    const getTeamValue=[
        {id:0,name:'EKİP'},
        {id:1,name:'Yönetim'},
        {id:2,name:'Danışmanlık Ekibi'},
        {id:3,name:'Dava Ekibi'},
        {id:4,name:'İcra Ekibi'},
        ];
    const teams=[
      {id:0,name:'EKİP'},
      {id:1,name:'Yönetim'},
      {id:2,name:'Danışmanlık Ekibi'},
      {id:3,name:'Dava Ekibi'},
      {id:4,name:'İcra Ekibi'},
    ];
  const users=[
    {id:0, name:'Okan',surname:'Beygo',title:'Kurucu Ortak',imageSrc:'lawyer1.png',teams:[1,2,3],activities:[1,2,3]},
    {id:1, name:'Denel Balli ',surname:'Kırali',title:'Ortak Avukat',imageSrc:'lawyer2.png',teams:[1,2,3],activities:[1,2,3]},
    {id:2, name:'Levent',surname:'Yetkil',title:'Ortak Avukat',imageSrc:'lawyer3.png',teams:[1,2,3],activities:[1,2,3]},
    {id:3, name:'Ela',surname:'Sarı',title:'Ortak Avukat',imageSrc:'lawyer4.png',teams:[1,2,3],activities:[1,2,3]},
    {id:4, name:'Melis',surname:'Mercan',title:'Kıdemli Avukat',imageSrc:'lawyer5.png',teams:[1,2,3],activities:[1,2,3]},
    {id:5, name:'Levent',surname:'Yetkil',title:'Ortak Avukat',imageSrc:'lawyer3.png',teams:[1,2,3],activities:[1,2,3]},
    {id:6, name:'Okan',surname:'Beygo',title:'Kurucu Ortak',imageSrc:'lawyer1.png',teams:[4],activities:[4]},
    {id:7, name:'Denel Balli ',surname:'Kırali',title:'Ortak Avukat',imageSrc:'lawyer2.png',teams:[4],activities:[1]},
    {id:8, name:'Levent',surname:'Yetkil',title:'Ortak Avukat',imageSrc:'lawyer3.png',teams:[4],activities:[2]},
    {id:9, name:'Ela',surname:'Sarı',title:'Ortak Avukat',imageSrc:'lawyer4.png',teams:[4],activities:[4]},
    {id:10, name:'Melis',surname:'Mercan',title:'Kıdemli Avukat',imageSrc:'lawyer5.png',teams:[4],activities:[8]},
    {id:11, name:'Levent',surname:'Yetkil',title:'Ortak Avukat',imageSrc:'lawyer3.png',teams:[4],activities:[10]},
    {id:12, name:'Okan',surname:'Beygo',title:'Kurucu Ortak',imageSrc:'lawyer1.png',teams:[1],activities:[3]},
    {id:13, name:'Denel Balli ',surname:'Kırali',title:'Ortak Avukat',imageSrc:'lawyer2.png',teams:[1],activities:[1]},
    {id:14, name:'Levent',surname:'Yetkil',title:'Ortak Avukat',imageSrc:'lawyer3.png',teams:[1],activities:[3]},
    {id:15, name:'Ela',surname:'Sarı',title:'Ortak Avukat',imageSrc:'lawyer4.png',teams:[1],activities:[2]},
    {id:16, name:'Melis',surname:'Mercan',title:'Kıdemli Avukat',imageSrc:'lawyer5.png',teams:[1],activities:[11]},
    {id:17, name:'Levent',surname:'Yetkil',title:'Ortak Avukat',imageSrc:'lawyer3.png',teams:[1],activities:[12]},
    {id:18, name:'Okan',surname:'Beygo',title:'Kurucu Ortak',imageSrc:'lawyer1.png',teams:[0],activities:[1,2,3]},
    {id:19, name:'Denel Balli ',surname:'Kırali',title:'Ortak Avukat',imageSrc:'lawyer2.png',teams:[0],activities:[1,2,3]},
    {id:20, name:'Levent',surname:'Yetkil',title:'Ortak Avukat',imageSrc:'lawyer3.png',teams:[0],activities:[1,2,3]},
    {id:21, name:'Ela',surname:'Sarı',title:'Ortak Avukat',imageSrc:'lawyer4.png',teams:[0],activities:[1,2,3]},
    {id:22, name:'Melis',surname:'Mercan',title:'Kıdemli Avukat',imageSrc:'lawyer5.png',teams:[0],activities:[1,2,3]},
    {id:23, name:'Levent',surname:'Yetkil',title:'Ortak Avukat',imageSrc:'lawyer3.png',teams:[0],activities:[1,2,3]},
  ];
    const teamActivityAreas=[
      {id:0,name:'Bankacılık ve Finans'},
      {id:1,name:'Borç Yapılandırma'},
      {id:2,name:'Danışmanlık Ekibi'},
      {id:3,name:'Dava Ekibi'},
      {id:4,name:'Türev İşlemler'},
      {id:5,name:'Havacılık Finansmanı'},
      {id:6,name:'Satın Alım Finansmanı'},
      {id:7,name:'Proje Finansmanı ve Altyapı Yatırımları'},
      {id:8,name:'Birleşme ve Devralmalar'},
      {id:9,name:'Şirketler Hukuku'},
      {id:10,name:'Gayrimenkul ve Kira Hukuku'},
      {id:11,name:'Bilgi ve İletişim Teknolojileri'},
      {id:12,name:'Özelleştirme'},
      {id:13,name:'Kişisel Verilerin Korunması'},
      {id:14,name:'Vergi'},
      {id:15,name:'Fikri ve Sınai Mülkiyet Hukuku'},
      {id:16,name:'Taşımacılık Hukuku'},
      {id:17,name:'İdare Hukuku'},
      {id:18,name:'Kamulaştırma Hukuku'},
      {id:19,name:'Uyuşmazlık Çözümü'},
      {id:20,name:'Ceza Hukuku'},
    ]
    this.setState({
      teamValues:getTeamValue,
      teamActivityAreas:teamActivityAreas,
      teams:teams,
      users:users,
    })
}
changeTeamValues=(e)=>{
  this.setState({
    teamValue:e.target.value,
    getTeamTrue: true,
  })

  setTimeout(() => {
    this.setState({ getTeamTrue: false });
  }, 1000);

  if (this.state.teamValue === -1){
    return this.state.teams.map((member) =>
        <option  value={member.id}  >{member.name}</option>
    );
  }

}
  changeActivityAreas=(e)=>{
    this.setState({
      activityValue:e.target.value,
      getTeamTrue: true,
    })
    setTimeout(() => {
      this.setState({ getTeamTrue: false });
    }, 1000);
  }
  render(){
    let getValuesData= this.state.teamValues.map((value) =>
        <option  value={value.id}  >{value.name}</option>
  );

    let getActivityData= this.state.teamActivityAreas.map((value) =>
        <option  value={value.id}  >{value.name}</option>
    );
    let getTeams=[];
    let getUsers=[];
    if (this.state.teamValue == -1) {
      getTeams = this.state.teams.map((member) =>
          <div className="team-section">
            <h1>{member.name}</h1>
            <div className="row">
              <div className="col-md-2">
                <a href="#">
                  <div className="lawyers-box">
                    <div className="lawyers-box-img">
                      <img src={require('./img/lawyer/lawyer1.png')} alt="" />
                    </div>
                    <h3>Okan Beygo</h3>
                    <span>Kurucu Ortak</span>
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="lawyers-box">
                    <div className="lawyers-box-img">
                      <img src={require('./img/lawyer/lawyer2.png')} alt="" />
                    </div>
                    <h3>DENEL BALCI KIRALİ</h3>
                    <span>ORTAK AVUKAT</span>
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="lawyers-box">
                    <div className="lawyers-box-img">
                      <img src={require('./img/lawyer/lawyer3.png')} alt="" />
                    </div>
                    <h3>LEVENT YETKİL</h3>
                    <span>ORTAK AVUKAT</span>
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="lawyers-box">
                    <div className="lawyers-box-img">
                      <img src={require('./img/lawyer/lawyer4.png')} alt="" />
                    </div>
                    <h3>ELA SARI</h3>
                    <span>ORTAK AVUKAT</span>
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="lawyers-box">
                    <div className="lawyers-box-img">
                      <img src={require('./img/lawyer/lawyer5.png')} alt="" />
                    </div>
                    <h3>MELİS MERCAN</h3>
                    <span>KIDEMLİ AVUKAT</span>
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="lawyers-box">
                    <div className="lawyers-box-img">
                      <img src={require('./img/lawyer/lawyer3.png')} alt="" />
                    </div>
                    <h3>LEVENT YETKİL</h3>
                    <span>ORTAK AVUKAT</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
      );
    }
    else{
      getTeams =  <div className="team-section">
            <h1>{this.state.teams[this.state.teamValue].name}</h1>
              <div className="row">
                {  this.state.users.map((user,i)=> {
                  console.warn("user.teams.includes(this.state.teamValue): ", user.teams.includes(this.state.teamValue));
                  console.warn("user.teams: ",user.teams )
                  console.warn("this.state.teamValue: ",this.state.teamValue )
                  let getTeams=user.teams;
                  let getActivityAreas=user.activities;
                  let teamValue=this.state.teamValue;
                  let activityValue=this.state.activityValue;
                  console.warn("teamValue",teamValue);
                  var found=false;
                  var foundtwo=false;
                  getTeams.find(function (element) {
                    if (element == teamValue)
                        return found=true;
                  else
                    return found=false;
                  });

                  getActivityAreas.find(function (element) {
                    if (element == activityValue)
                      return foundtwo=true;
                    else
                      return foundtwo=false;
                  });
                  if(found === true){
                    if (this.state.activityValue== -1 ){
                      return (
                          <div key={i} className="col-md-2">
                            <a href="#">
                              <div className="lawyers-box">
                                <div className="lawyers-box-img">
                                  <img src={require('./img/lawyer/'+user.imageSrc)} alt="" />
                                </div>
                                <h3>{user.name+ " " +user.surname}</h3>
                                <span>{user.title}</span>
                              </div>
                            </a>
                          </div>
                      )
                    }else{
                        if (foundtwo==true){
                          return (
                              <div key={i} className="col-md-2">
                                <a href="#">
                                  <div className="lawyers-box">
                                    <div className="lawyers-box-img">
                                      <img src={require('./img/lawyer/'+user.imageSrc)} alt="" />
                                    </div>
                                    <h3>{user.name+ " " +user.surname}</h3>
                                    <span>{user.title}</span>
                                  </div>
                                </a>
                              </div>
                          )
                        }
                    }
                   }
                }) }
              </div>
          </div>

    }
    return(<section className="about-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>EKİP</h1>
                <div className="lawyer-selection-section">
                  <div className="lawyer-selection">
                    <select value={this.state.teamValue} onChange={this.changeTeamValues} className="form-control" id="select-team">
                      <option  value={-1}  >{'Tümü'}</option>
                      {getValuesData}
                    </select>

                    <select value={this.state.activityValue} onChange={this.changeActivityAreas} className="form-control" id="select-activity-areas">
                      <option value={-1}>FAALİYET ALANLARI</option>
                      {getActivityData}
                    </select>
                    <div className="all-team-select">
                      TÜMÜ
                    </div>
                  </div>
                </div>
                {this.state.getTeamTrue  ? <div className={"bd-example"}><div className="text-center"><div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div></div></div> : getTeams}
              </div>
            </div>
          </div>
        </section>
    )
  }


}



export default App;
