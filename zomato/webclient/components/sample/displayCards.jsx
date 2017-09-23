import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';
//import Sample from './sample.jsx';
var $ = require('jquery');
export default class Display extends React.Component {
    constructor(props)
    {
        super(props);
    }
    add()
    {
        console.log(this);
        $.ajax({
            url: "http://localhost:8080/stream/add",
            data: this,
            type: "POST",
            success: function(data) {
                console.log(data);
            }
        })
    }

    deleteDB() {
        console.log(this);
        $.ajax({
          url: "http://localhost:8080/stream/deleteDb",
          data: this,
          type: "DELETE",
          success: function(data) {
             console.log(data);
            }})
    }
    render()
    {
        function RestaurantDisplay(props) {

            const data2 = props.restaurant_Details;

            const listItems = data2.map((dat, index) => {
                var img;
                const name = {
                    name: dat.restaurant.name
                };
                if (dat.restaurant.featured_image)
                    img = dat.restaurant.featured_image
                else
                    img = "http://coxsupply.com/welcome.png"
                var details = {
                    _id: dat.restaurant.R.res_id,
                    name: dat.restaurant.name,
                    image: dat.restaurant.featured_image,
                    rating: dat.restaurant.user_rating.aggregate_rating,
                    address: dat.restaurant.location.address
                };
                return (
                    <a href="#">
                        <Card key={String(index)} color='red'>
                            <Card.Content>
                                <Image floated='left' size='medium' src={img}/>
                                <Card.Header>
                                    {dat.restaurant.name}
                                </Card.Header>
                                <Card.Meta>
                                    rating : {dat.restaurant.user_rating.aggregate_rating}
                                    &nbsp; votes : {dat.restaurant.user_rating.votes}
                                </Card.Meta>
                                <Card.Description>
                                    {String(dat.restaurant.location.address)}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='red' onClick={props.add.bind(details)}>Save to Fav</Button>
                                    <Button basic color='green' onClick={props.deleteDB.bind(details)}>zomato Link</Button>
                                </div>
                            </Card.Content>
                        </Card>
                    </a>
                );
            })
            return <Card.Group >
                {listItems}
            </Card.Group>;
        }
        return (<RestaurantDisplay restaurant_Details={this.props.data1} add={this.add} deleteDB={this.deleteDB}/>)
    }

}
