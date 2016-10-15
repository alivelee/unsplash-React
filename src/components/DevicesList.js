import React, { Component } from 'react';
const DevicesList = ({items}) => {
    return (
      <section>
        {items.map(item =>
          <div key={item.key}>
            <h3>设备名称:{item.key}</h3>
            <span>传感器类型: {item.cmos_processor}</span>
            <span>画幅: {item.cmos_size}</span>
            <span>传感器品种:{item.cmos_type}</span>
            <span>最高像素:{item.highest_res}</span>
          </div>
        )}
      </section>
    );
}
export default DevicesList;
