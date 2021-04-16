import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

export default class Calculator extends Component {
  state = {
    hienthi : '',
    textvuanhap : '',
    texttruocdo : '',
    toantu : ''
  };

  switchcase(){
    switch (this.state.toantu) {
      case "+":
        this.setState({
          hienthi : (parseFloat(this.state.texttruocdo) + parseFloat(this.state.textvuanhap)).toString(),
          texttruocdo : (parseFloat(this.state.texttruocdo) + parseFloat(this.state.textvuanhap)).toString()
        });
        break;
      case "-":
        this.setState({
          hienthi : (parseFloat(this.state.texttruocdo) - parseFloat(this.state.textvuanhap)).toString(),
          texttruocdo : (parseFloat(this.state.texttruocdo) - parseFloat(this.state.textvuanhap)).toString()
        });
        break;
      case "x":
        this.setState({
          hienthi : (parseFloat(this.state.texttruocdo) * parseFloat(this.state.textvuanhap)).toString(),
          texttruocdo : (parseFloat(this.state.texttruocdo) * parseFloat(this.state.textvuanhap)).toString()
        });
        break;
      case "/":
        this.setState({
          hienthi : (parseFloat(this.state.texttruocdo) / parseFloat(this.state.textvuanhap)).toString(),
          texttruocdo : (parseFloat(this.state.texttruocdo) / parseFloat(this.state.textvuanhap)).toString()
        });
        break;
    };
  }


  nhapvaodau(props){
    if((this.state.texttruocdo == '' || this.state.textvuanhap == '') && this.state.toantu != ''){
      this.setState({
        toantu : props,
        hienthi : props
      });
    }
    else{
      if(this.state.texttruocdo == '' && this.state.toantu == ''){
        if(this.state.textvuanhap != ''){
          this.setState({
            hienthi : props,
            texttruocdo : this.state.textvuanhap,
            textvuanhap : '',
            toantu : props
          });
        }
        else{
          this.setState({
            texttruocdo : "0",
            hienthi : props,
            toantu : props
          });
        }
      }
      else{
        if(this.state.texttruocdo != '' && this.textvuanhap != ''){
          this.switchcase();
          this.setState({toantu : props, textvuanhap : ''});
        }
      }
    }
  };

  nhapvaodaubang(){
    if(this.state.texttruocdo != '' && this.state.textvuanhap != '' && this.state.toantu != ''){
      this.switchcase();
      this.setState({toantu : '', textvuanhap : ''});
    }
  }

  nhapvaoso(props){
    if((this.state.texttruocdo == '0' || this.state.texttruocdo != '')  && this.state.toantu == ''){
    }
    else{

      this.setState({
        textvuanhap : this.state.textvuanhap + props,
        hienthi : this.state.textvuanhap + props
      });
    }
  };

  xoa(){
    if(this.state.textvuanhap.length == 1 && this.state.toantu != ''){
      this.setState({
        textvuanhap : '',
        hienthi : this.state.toantu,
      });
    }
    else{
      if(this.state.textvuanhap == '' && this.state.toantu != '' && this.state.texttruocdo != ''){
        this.setState({
          textvuanhap : this.state.texttruocdo,
          texttruocdo : '',
          hienthi : this.state.texttruocdo,
          toantu : ''
        });
      }
      else{
        if(this.state.texttruocdo != '' && this.state.textvuanhap == '' && this.state.toantu == ''){
          this.setState({
            hienthi : this.state.texttruocdo.substring(0, this.state.texttruocdo.length - 1),
            texttruocdo : this.state.texttruocdo.substring(0, this.state.texttruocdo.length - 1)
          });
        }
        else{
          this.setState({
            hienthi : this.state.textvuanhap.substring(0, this.state.textvuanhap.length - 1),
            textvuanhap : this.state.textvuanhap.substring(0, this.state.textvuanhap.length - 1)
          });
        }
      }
    }
  };

  render(){
    return(
      <View style = {styless.bocngoaicung}>
        <View style = {styless.screenhienthi}>
          <View style = {{flex: 1, justifyContent: 'center'}}>
            <Text style = {{color : '#d9d9d9', fontSize: 20, marginLeft: 20, textAlign:'right', marginRight: 10}}>{this.state.texttruocdo} {this.state.toantu} {this.state.textvuanhap}</Text>
          </View>
          <View style = {{flex: 3, justifyContent: 'center'}}>
            <Text style = {[styless.manhinh, {textAlign:'right', marginRight: 10}]}>{this.state.hienthi}</Text>
          </View>
        </View>
        <View style = {styless.bocnutnhan}>
          <View style = {styless.hangdautien}>
            <View style = {[styless.othuochangdautien, styless.borderobinhthuong]}>
              <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaodau('+')}}>
              <Text style = {styless.nutnhan}>+</Text>
              </TouchableOpacity>
            </View>
            <View style = {[styless.othuochangdautien, styless.borderogiua]}>
              <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaodau('-')}}>
              <Text style = {styless.nutnhan}>-</Text>
              </TouchableOpacity>
            </View>
            <View style = {[styless.othuochangdautien, styless.borderobinhthuong]}>
              <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaodau('x')}}>
              <Text style = {styless.nutnhan}>x</Text>
              </TouchableOpacity>
            </View>
            <View style = {[styless.othuochangdautien, {borderLeftWidth: 1,borderBottomWidth: 1,borderColor: 'grey'}]}>
              <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaodau('/')}}>
              <Text style = {styless.nutnhan}>/</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {styless.bocthuhai}>
          <View style = {styless.bocthuba}>
            <View style = {styless.hangthun}>
              <View style = {[styless.othuochang, styless.borderobinhthuong]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('7')}}>
                <Text style = {styless.nutnhan}>7</Text>
                </TouchableOpacity>
              </View>
              <View style = {[styless.othuochang, styless.borderogiua]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('8')}}>
                <Text style = {styless.nutnhan}>8</Text>
                </TouchableOpacity>
              </View>
              <View style = {[styless.othuochang, styless.borderobinhthuong]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('9')}}>
                <Text style = {styless.nutnhan}>9</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style = {styless.hangthun}>
              <View style = {[styless.othuochang, styless.borderobinhthuong]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('4')}}>
                <Text style = {styless.nutnhan}>4</Text>
                </TouchableOpacity>
              </View>
              <View style = {[styless.othuochang, styless.borderogiua]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('5')}}>
                <Text style = {styless.nutnhan}>5</Text>
                </TouchableOpacity>
              </View>
              <View style = {[styless.othuochang, styless.borderobinhthuong]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('6')}}>
                <Text style = {styless.nutnhan}>6</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style = {styless.hangthun}>
              <View style = {[styless.othuochang, styless.borderobinhthuong]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('1')}}>
                <Text style = {styless.nutnhan}>1</Text>
                </TouchableOpacity>
              </View>
              <View style = {[styless.othuochang, styless.borderogiua]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('2')}}>
                <Text style = {styless.nutnhan}>2</Text>
                </TouchableOpacity>
              </View>
              <View style = {[styless.othuochang, styless.borderobinhthuong]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('3')}}>
                <Text style = {styless.nutnhan}>3</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style = {styless.hangthun}>
              <View style = {styless.othuochang}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('0')}}>
                <Text style = {styless.nutnhan}>0</Text>
                </TouchableOpacity>
              </View>
              <View style = {[styless.othuochang, {borderLeftWidth: 1,borderRightWidth: 1,borderColor: 'grey'}]}>
                <TouchableOpacity style = {styless.touchable} onPress = {() => {this.nhapvaoso('.')}}>
                <Text style = {styless.nutnhan}>.</Text>
                </TouchableOpacity>
              </View>
              <View style = {styless.othuochang}>
                <TouchableOpacity style = {styless.touchable} onPress = {()=> {this.setState({hienthi : '',
                textvuanhap : '',
                texttruocdo : '',
                toantu : ''})}}>
                <Text style = {styless.nutnhan}>C</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style = {{borderLeftWidth: 1,borderColor: 'grey',flex : 1}}>
          <View style = {{flex : 1, borderBottomWidth: 1, borderColor: 'grey'}}>
            <TouchableOpacity style = {styless.touchable} onPress = {()=> {this.xoa()}}>
            <Text style = {styless.nutnhan}>&lt;-</Text>
            </TouchableOpacity>
          </View>
          <View style = {{flex: 3, backgroundColor: '#F7A457'}}>
            <TouchableOpacity style = {styless.touchable} onPress = {()=> {this.nhapvaodaubang()}}>
            <Text style = {styless.nutnhan}>=</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>
        </View>
      </View>
    )
  }
}

const styless = StyleSheet.create({
  bocngoaicung : {
    flex : 1,
    borderWidth: 1,
    borderColor: 'grey'
  },
  screenhienthi : {
    flex : 1,
    backgroundColor: 'black'
  },
  bocnutnhan : {
    flex : 3,
  },
  hangdautien : {
    flex : 1,
    flexDirection : 'row',
    backgroundColor : '#D1D1D1'
  },
  bocthuhai : {
    flex : 4,
    flexDirection : 'row'
  },
  bocthuba : {
    flex : 3
  },
  hangthun : {
    flex : 1,
    flexDirection : 'row'
  },
  othuochang : {
    flex : 1,
  },
  othuochangdautien : {
    flex : 1,
  },
  touchable : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nutnhan : {
    fontSize: 30
  },
  borderobinhthuong : {
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  borderogiua : {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'grey'
  },
  manhinh : {
    color: '#d1d1d1',
    fontSize : 50,
    paddingLeft : 10
  }
});
