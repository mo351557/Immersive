import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import $ from 'jquery';
import {Dropdown, Modal, Button} from 'semantic-ui-react';
import Display from './displayCards.jsx';
var restaurants="";
export default class Sample extends React.Component {
    constructor() {
        super();
        this.state = {
            city: '',
            cuisine_arr: [],
            cuisine_name: [],
            cuisine_id: '',
						city_id:'',
						displayCards:[],
        }
    }

    handleNameState(event) {
        this.setState({city: event.target.value});
    }

    handleCuisine(event,data) {
        // for (var i = 0; i < this.state.cuisine_arr.length; i++) {
        //     if (this.state.cuisine_arr[i].cuisine.cuisine_name == data.value) {
        //         this.setState({cuisine_id: this.state.cuisine_arr[i].cuisine.cuisine_id})
        //         //console.log(this.state.cuisine_id);
        //     }
        // }
        this.setState({cuisine_id: data.value})

    }
    handleCity(cityName) {
        var cty_id;
        var arr = [];

        $.ajax({
            type: "GET",
            url: "https://developers.zomato.com/api/v2.1/cities?q=" + this.state.city,
            dataType: "json",
            headers: {
                "Accept": " application/json",
                "user-key": " 5685dac5ae1d1777586d0f3019f9048f"
            },
            success: function(data) {
                cty_id = data.location_suggestions[0].id;
								this.setState({city_id: cty_id});
                $.ajax({
                    type: "GET",
                    url: "https://developers.zomato.com/api/v2.1/cuisines?city_id=" + cty_id,
                    dataType: "json",
                    headers: {
                        "Accept": " application/json",
                        "user-key": " 5685dac5ae1d1777586d0f3019f9048f"
                    },

                    success: function(data) {
                        console.log(cty_id);
                        //console.log(data.cuisines);
                        let cuisineArr = data.cuisines;
                        this.setState({cuisine_arr: cuisineArr});
                        for (var i = 0; i < data.cuisines.length; i++) {
                            let a = data.cuisines[i].cuisine.cuisine_name;
														let b = data.cuisines[i].cuisine.cuisine_id;
                            // arr.push(data.cuisines[i].cuisine.cuisine_name);
                            arr.push({key: b, text: a, value: b});
                            this.setState({cuisine_name: arr});
                        }
                      //  console.log(data.cuisines);

                        //this.setState({cuisine_name: a});
                        // 	console.log(data.cuisines[0].cuisine.cuisine_name);
                      //  console.log(arr);

                        //this.setState({cuisine_name: arr});
                        //console.log(cuisine_name);
                    }.bind(this)
                })

            }.bind(this)
        })

    }
    call2() {
        var city = this.state.city_id;
        var cus_id = this.state.cuisine_id;
        console.log("cuisine_id: "+cus_id);
        $.ajax('https://developers.zomato.com/api/v2.1/search?entity_id=' + city + '&entity_type=city'+'&cuisines='
				 + cus_id + '&apikey=5685dac5ae1d1777586d0f3019f9048f',
				{
            success: function(data) {
                this.setState({displayCards: data.restaurants});
                console.log(this.state.displayCards);
            }.bind(this)
        })
    }

    render() {
        return (
            <div>
                <h1>AlaGaPuRi</h1>
                <TextField floatingLabelText="City" onChange={this.handleNameState.bind(this)} value={this.state.city}/>
                <br/>
                <RaisedButton label="Search" primary={true} onClick={this.handleCity.bind(this)}/>
                <Dropdown id="Dropdown " placeholder="Cuisines"  search selection options={this.state.cuisine_name}
								onChange={this.handleCuisine.bind(this)}/>
                <Button content='SearchRestaurants' onClick={this.call2.bind(this)}/><br/><br/>
								<Display data1={this.state.displayCards}/>
            </div>
        );
    }
} //end of class
