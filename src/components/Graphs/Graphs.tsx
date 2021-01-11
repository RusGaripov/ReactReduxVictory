import React, { Component } from 'react'
import {connect} from "react-redux"
import {getData} from "../../store/actions/dataActions"
import Spinner from "../Spinner/Spinner"
import {VictoryChart,VictoryAxis,VictoryBar,VictoryLabel,VictoryTheme} from 'victory';
import "react-datepicker/dist/react-datepicker.css";


interface IPostsProps {
getData:any,
period:any,
}

interface IPostsState {
  from:string,
  to:string,
}

 
export class Posts extends Component <IPostsProps,IPostsState> {
  
        state = {
           from:'2020-05-01',
           to:'2020-05-15',
        };
 
      
   componentDidMount() {
      this.props.getData();
   }

   onChange=(e:React.ChangeEvent <HTMLInputElement>)=> {
      this.setState({ [e.target.name]: e.target.value} as any);
};

   onSubmit=(e:React.FormEvent <HTMLFormElement>)=> {
    e.preventDefault();
    this.props.getData(this.state.from,this.state.to);
    }

  
    render() {
     var element:any={},cart=[];
      if(this.props.period!=undefined&&this.props.period!=null){
           const arr3 = Object.keys(this.props.period).map((item:any) => item);
    
        for(var i=0;i<arr3.length;i++){
           element.date=arr3[i];
           element.volume=this.props.period[arr3[i]]['countries']['Russia'].today_new_confirmed
           element.recovered=this.props.period[arr3[i]]['countries']['Russia'].today_new_recovered
           element.deaths=this.props.period[arr3[i]]['countries']['Russia'].today_new_deaths
           cart.push({date:arr3[i],volume:this.props.period[arr3[i]]['countries']['Russia'].today_new_confirmed,recovered:this.props.period[arr3[i]]['countries']['Russia'].today_new_recovered,
           deaths: this.props.period[arr3[i]]['countries']['Russia'].today_new_deaths
          });
      }
    }
        const {period} = this.props;

        if(!period){
            return <Spinner/>;
        }

        return (
            <div>
             <div className="row" style={{ marginTop:"20px",marginBottom:"20px" }}>
               <form className="card p-3 mx-auto col-md-6" onSubmit={this.onSubmit}>
                   <h2 className="text-center">Выбрать период</h2>

                   <div className="form-group">
                       <label htmlFor="from">С</label>
                       <input 
                        type="date"
                        className="form-control"
                        placeholder="YYYY-MM-DD"
                        value={this.state.from} 
                        onChange={this.onChange} 
                        name="from"/>
                   </div>

                   <div className="form-group">
                       <label htmlFor="to">По</label>
                       <input 
                        type="date" 
                        placeholder="YYYY-MM-DD"
                        className="form-control" 
                        value={this.state.to} 
                        onChange={this.onChange} 
                        name="to"/>
                   </div>
                   <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop:"20px",marginBottom:"20px" }}>Получить данные</button>
               </form>
           </div>

            {/* Total new cases */}

            
          <VictoryChart
             theme={VictoryTheme.material}
             domainPadding={{ x: 15 }}  
             height={200}
             width={600}
  
          >
          <VictoryAxis
              axisLabelComponent={<VictoryLabel dy={20}/>}
              label="Day"
              style={{
                tickLabels: {
                fontSize: 4, 
              },
              axisLabel: {
                fontSize: 8,
                padding: 10
              },
              }}
          />
          <VictoryAxis
             dependentAxis
             axisLabelComponent={<VictoryLabel dy={-30}/>}
             label="Total new cases"
             style={{
               tickLabels: {
               fontSize: 4   
             },
             axisLabel: {
               fontSize: 8,
               padding: 10
             }, 
            }}
          />


           <VictoryBar
              barRatio={0.5}
              style={{
                 data: { fill: "Maroon"}
              }}
              data={cart} x="date" y="volume" 
           />
          </VictoryChart>

            {/* Total new recovered */}

           <VictoryChart
               theme={VictoryTheme.material}
               domainPadding={{ x: 15 }}  
               height={200}
               width={600}
           >
           <VictoryAxis
               axisLabelComponent={<VictoryLabel dy={20}/>}
               label="Day"
               style={{
                  tickLabels: {
                  fontSize: 4,
               },
               axisLabel: {
                  fontSize: 8,
                  padding: 10
               },
               }}
          />
          <VictoryAxis
               dependentAxis
               axisLabelComponent={<VictoryLabel dy={-30}/>}
               label="Total new recovered"
               style={{
                 tickLabels: {
                 fontSize: 4  
               },
               axisLabel: {
                 fontSize: 8,
                 padding: 10
               },
              }}
          />

          <VictoryBar
              barRatio={0.5}
              style={{
                 data: { fill: "green"},
                 labels: { fill: "orange" }
              }}
              data={cart} x="date" y="recovered" 
          />
          </VictoryChart>

             {/* Total new deaths */}
 
          <VictoryChart
             theme={VictoryTheme.material}
             domainPadding={{ x: 15 }}  
             height={200}
             width={600} 
          >
          <VictoryAxis
             axisLabelComponent={<VictoryLabel dy={20}/>}
             label="Day"
             style={{
                tickLabels: {
                fontSize: 4,
             },
             axisLabel: {
                 fontSize: 8,
                 padding: 10
             },
            }}
          />
          <VictoryAxis
             dependentAxis
             axisLabelComponent={<VictoryLabel dy={-30}/>}
             label="Total new deaths"
             style={{
                tickLabels: {
                fontSize: 4  
             },
            axisLabel: {
               fontSize: 8,
               padding: 10
             },
            }}
         />

          <VictoryBar
             barRatio={0.5}
             style={{
                  data: { fill: "red"},
             }}
             data={cart} x="date" y="deaths" 
         />
 
  </VictoryChart>

            </div>
        )
    }
}

const mapStateToProps = (state:any) => ({
    period: state.dataReducer.period,
})

export default connect(mapStateToProps, {getData})(Posts)
