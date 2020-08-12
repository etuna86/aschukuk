import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/dist/css/bootstrap.css';
//import './css/fonts.css';
import './css/style.css';


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
        teamValue:-1,
        teamValues:[],
        teamMembers:[],
        getTeamTrue:false,
    }
  }
componentDidMount() {
this.getTeamValues();
}
getTeamValues=()=>{
    const getTeamValue=[
        {id:0,name:'EKİP'},
        {id:1,name:'Yönetim'},
        {id:2,name:'Danışmanlık Ekibi'},
        {id:3,name:'Dava Ekibi'},
        {id:4,name:'İcra Ekibi'},
        ];
    const teamMembers=[
      {id:0,name:'EKİP'},
      {id:1,name:'Yönetim'},
      {id:2,name:'Danışmanlık Ekibi'},
      {id:3,name:'Dava Ekibi'},
      {id:4,name:'İcra Ekibi'},
    ];
    const teamActivityAreas=[
      {id:0,name:'EKİP'},
      {id:1,name:'Yönetim'},
      {id:2,name:'Danışmanlık Ekibi'},
      {id:3,name:'Dava Ekibi'},
      {id:4,name:'İcra Ekibi'},
    ]
    this.setState({
      teamValues:getTeamValue,
      teamMembers:teamMembers,
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
    return this.state.teamMembers.map((member) =>
        <option  value={member.id}  >{member.name}</option>
    );
  }

}

  render(){
    let getValuesData= this.state.teamValues.map((value) =>
        <option  value={value.id}  >{value.name}</option>
  );
    let getTeams=[];
    if (this.state.teamValue == -1) {
      getTeams = this.state.teamMembers.map((member) =>
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
            <h1>{this.state.teamMembers[this.state.teamValue].name}</h1>
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

                    <select className="form-control" id="select-activity-areas">
                      <option>FAALİYET ALANLARI</option>
                      <option>Bankacılık ve Finans</option>
                      <option>Borç Yapılandırma</option>
                      <option>Türev İşlemler</option>
                      <option>Havacılık Finansmanı</option>
                      <option>Satın Alım Finansmanı</option>
                      <option>Proje Finansmanı ve Altyapı Yatırımları</option>
                      <option>Birleşme ve Devralmalar</option>
                      <option>Şirketler Hukuku</option>
                      <option>Gayrimenkul ve Kira Hukuku</option>
                      <option>Bilgi ve İletişim Teknolojileri</option>
                      <option>Özelleştirme</option>
                      <option>Kişisel Verilerin Korunması</option>
                      <option>Vergi</option>
                      <option>İş Hukuku</option>
                      <option>Fikri ve Sınai Mülkiyet Hukuku</option>
                      <option>Taşımacılık Hukuku</option>
                      <option>İdare Hukuku</option>
                      <option>Kamulaştırma Hukuku</option>
                      <option>Uyuşmazlık Çözümü</option>
                      <option>Ceza Hukuku</option>
                    </select>
                    <div className="all-team-select">
                      TÜMÜ
                    </div>
                  </div>
                </div>
                {this.state.getTeamTrue  ? <div class={"bd-example"}><div className="text-center"><div className="spinner-border text-primary" role="status">
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
