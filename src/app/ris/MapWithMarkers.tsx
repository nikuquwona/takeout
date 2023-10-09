import React, { Component } from 'react';
import {useRequest} from '../../../hooks/useRequest'


class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [],
      inputX: 0,
      inputY: 0,
      markerText: '',
      pointColor: 'red', // 默认颜色为红色
    };
  }

  componentDidMount() {
    // 在这里获取坐标点数据，可以从API请求或其他方式获取
    // 这里生成随机坐标点
    const coordinates = [];
    // for (let i = 0; i < 10; i++) {
    //   const x = Math.random() * 75;
    //   const y = (Math.random() * 50) - 25;
    //   coordinates.push({ x, y, markerText: `Point ${i + 1}`, color: 'red' });
    // }
    coordinates.push({x:0,y:0,markerText:'AP',color:'red'})

    coordinates.push({x:50.90329360961914,y:4.768335342407227,markerText:'irs',color:'blue'})
    coordinates.push({x:42.50600814819336,y:1.0168107748031616,markerText:'irs',color:'blue'})
    coordinates.push({x:39.5174446105957,y:9.108505725860596,markerText:'irs',color:'blue'})
    // 49.90329360961914, 4.768335342407227, 2.0135114192962646
    // 42.50600814819336, 1.0168107748031616, 2.0258564949035645
    // 39.5174446105957, 4.108505725860596, 2.0592241287231445
    coordinates.push({x:40,y:10,markerText:'user',color:'green'})
    coordinates.push({x:44,y:0,markerText:'user',color:'green'})
    coordinates.push({x:42,y:1,markerText:'user',color:'green'})
    coordinates.push({x:50,y:5,markerText:'user',color:'green'})
    // (40,3),(44,0),(42,1),(50,5)
    this.setState({ coordinates });
  }

  // 处理输入的坐标、标记信息和颜色
  handleInputCoordinates = () => {
    const { inputX, inputY, markerText, pointColor } = this.state;

    // 限制输入坐标在图像范围内
    const x = Math.min(75, Math.max(0, inputX));
    const y = Math.min(25, Math.max(-25, inputY));

    // 更新状态
    this.setState({ inputX: x, inputY: y });

    // 将坐标、标记信息和颜色添加到坐标数组中
    const newCoordinates = [...this.state.coordinates, { x, y, markerText, color: pointColor }];
    this.setState({ coordinates: newCoordinates });

    // 清空输入
    this.setState({ inputX: 0, inputY: 0, markerText: '', pointColor: 'red' });
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <img src="/map.png" alt="Map Background" style={{ width: '100%', height: '100%' }} />
        {this.state.coordinates.map((coord, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${coord.x}%`,
              top: `${50 - coord.y}%`,
              width: '10px',
              height: '10px',
              backgroundColor: coord.color, // 使用指定的颜色
              borderRadius: '50%',
            }}
          >
            {/* 在这里添加标记信息 */}
            <span>{coord.markerText}</span>
          </div>
        ))}
        <div>
          <input
            type="number"
            placeholder="X坐标 (0-75)"
            value={this.state.inputX}
            onChange={(e) => this.setState({ inputX: e.target.value })}
          />
          <input
            type="number"
            placeholder="Y坐标 (-25-25)"
            value={this.state.inputY}
            onChange={(e) => this.setState({ inputY: e.target.value })}
          />
          <input
            type="text"
            placeholder="标记信息"
            value={this.state.markerText}
            onChange={(e) => this.setState({ markerText: e.target.value })}
          />
          <input
            type="color"
            value={this.state.pointColor}
            onChange={(e) => this.setState({ pointColor: e.target.value })}
          />
          <button onClick={this.handleInputCoordinates}>添加坐标</button>
        </div>
      </div>
    );
  }
}

export default MapComponent;
