import React from 'react';
import './WidgetList.css';


const WidgetList = ({widgets, selectWidget}) => {
    console.log(widgets);
    return (
        <div>
         {
            widgets.map((widget) => {
                return(
                    <div className = 'widget-list' key={widget._id} onClick={(e) => {
                        console.log('Click', widget)
                        selectWidget(widget)
                    }} > 
                        <div>
                            id: {widget._id}
                        </div>
                        <div>
                            name: {widget.name}
                        </div>
                        <div>
                            material: {widget.material}
                        </div>
                        <div>
                            numComponents: {widget.numComponents}
                        </div>
                        <div>
                            componentIds: {widget?.componentIds?.length ? widget?.componentIds.join(',') : 'No sub components'}
                        </div>
                    </div>
                )
            })
         }
        </div>
    )
};

export default WidgetList;