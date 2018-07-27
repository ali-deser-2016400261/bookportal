    import React from 'react';

    function Title(props) {
        return (
            <div>
            <h1>{(props.title)}</h1>
            <h3>{(props.subtitle)}</h3>
            
            
            </div>)
        }
        
        
        function ChooseOptions(props) {
            return (
                <div>
                <div><b>Choose Options</b></div>
                <span>New Only</span> <input type="checkbox" value="New Only" />
                <div> <span>Select Type</span> <select name="select Type">
                <option value="">Convertibles</option></select></div>
                
                
                </div>)
            }
            
            
            
            
            
            
            function ListItem(props) {
                
                const content = props.item;
                return (
                    
                    
                    <p><table border="1" width="700" height="80">
                    <tr align="left" bgcolor="#eaba22">
                    <th>Year</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Buy</th>
                    </tr>
                    <tr>
                    <td>{content.year}</td>
                    <td>{content.model}</td>
                    <td>{content.price}</td>
                    <td><button type="button">Buy Now</button></td>
                    </tr>
                    </table>  </p>
                    
                    
                    
                );
                
            }
            
            
            
            
            function VehicleType(props) {
                return (
                    <div>
                    <h3>{props.header}</h3>
                    
                    
                    
                    
                    {props.typeName1.map(function (item, i) {
                        return <ListItem key={i} item={item} />
                    })
                }
                
                
                
                
                
                </div>)
            }
            
            
            
            
            
            
            
            
            
            
            function CarApp(props) {
                
                
                
                const data = {
                    title: "Welcome to React Transportation",
                    subtitle: " The best place to buy vehicles online",
                    
                    vehicleTypes: [{
                        typeName: "Car",
                        vehicles: [
                            {
                                
                                year: "2013",
                                model: "A",
                                price: "$32000"
                                
                            },
                            {
                                
                                year: "2011",
                                model: "B",
                                price: "$44400"
                                
                            },
                            {
                                
                                year: "2016",
                                model: "B",
                                price: "$15500"
                                
                            }
                        ]
                    }, {
                        typeName: "Truck",
                        vehicles: [
                            
                            
                            {
                                
                                year: "2014",
                                model: "D",
                                price: "$21000"
                                
                            },
                            {
                                
                                year: "2016",
                                model: "E",
                                price: "$55000"
                                
                            }
                        ]
                        
                    }]
                    
                    
                    
                };
                
                
                
                
                return (
                    <div>
                    <Title title={data.title} subtitle={data.subtitle} />
                    <ChooseOptions />
                    
                    
                    {data.vehicleTypes.map(function (category, i) {
                        return (
                            <VehicleType
                            header={category.typeName}
                            key={1}
                            typeName1={category.vehicles}
                            
                            
                            
                            />
                            
                        );
                    })}
                    
                    
                    
                    
                    
                    
                    </div>
                );
            }
            
            
            
            // return (<div>
            //     <ShoppingTitle title= "MyShoppingList" numItems ="9"/>
            //     <ShoppingList header = "Food" numItems= "4" items= {["Apple" ,"Bread" ,"Cheese", "California"]}/>
            //     <ShoppingList header = "Clothes" items= {["Shirts","Pants","Hat"]}/>
            //     <ShoppingList header = "Supplies" items= {["Pen","Paper","Glue"]}/>
            //     </div>)
            //     }
            
            
            
            
            
            export default CarApp;