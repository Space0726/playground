import React, {Component} from 'react';
import "./PluginItem.css";


interface Props {
    name: string;
    image: string;
    detail: string;
    download: string;
}

interface State {
    
  }

 
class PluginItem extends Component<{name: string; image: string; detail: string; download: string}, State> {
    render(){
        const {name, image, detail, download} = this.props;
        return (
            <div className="plugin_box">
                <h1 className="plugin_title" id="name">{name}</h1>
                <img className="plugin_image" src={image} alt={name}/>
                <div className="plugin_link">
                    
                    <div className="plugin_link_detail">
                        <a href={detail}>Detail</a>
                    </div>
                
                    <div className="plugin_link_download">
                        <a href={download}>Download</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default PluginItem;