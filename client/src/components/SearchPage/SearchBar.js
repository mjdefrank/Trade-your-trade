import React, { Component } from 'react';
import { Col, Row, Card, isOpen, toggle, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SearchBar extends Component {
    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="skillSelect">Choose a skill</Label>
                            <Input type="dropDown" name="skill" id="skillSelect">
                            <Dropdown isOpen={isOpen} toggle={toggle}>
                                <DropdownToggle>
                                    Choose a skill
                                </DropdownToggle>
                                <DropdownMenu
                                    modifiers={{
                                        setMaxHeight: {
                                            enabled: true,
                                            order: 890,
                                            fn: (data) => {
                                                return {...data, styles: {...data.styles, overflow: 'auto', maxHeight: 100,},};
                                            },
                                        },
                                    }}
                                >
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </Input>
		                <Label for="radiusSelect" className="label-text">Search for jobs within</Label>
		        	        <Input type="select" name="select" id="radiusSelect">
		                        <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
		                    </Input>
		                <Label for="zipSelect" className="label-text">miles of</Label>
		                    <Input name="zip" id="zipSelect" className="zip-input" placeholder="Enter Zipcode"/>
	                </FormGroup>
                </Form>
 
               
                <row>
                    <col xs='12'>
                        <Button color="secondary">Search</Button>{' '} 
                        {/* needs a handleClick to compare field data with database */}
                    </col>
                </row>
            </div>
        )
    }
}