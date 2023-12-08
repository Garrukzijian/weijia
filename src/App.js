import React, { useState, useEffect } from "react";
import { Input, List, Card, Image } from "antd";
import image1 from "./assest/八里庄.jpg";
import image2 from "./assest/北京大学.jpg";
import image3 from "./assest/北京西站.jpg";
import image4 from "./assest/财智大厦.jpg";
import image5 from "./assest/常营.jpg";
import image6 from "./assest/次渠.jpg";
import image7 from "./assest/翠屏西路.jpg";
import image8 from "./assest/观音寺.jpg";
import image9 from "./assest/华普.jpg";
import image10 from "./assest/回龙观西大街.jpg";
import image11 from "./assest/建外.jpg";
import image12 from "./assest/酒仙桥.jpg";
import image13 from "./assest/梨园.jpg";
import image14 from "./assest/六里桥.jpg";
import image15 from "./assest/潞河.jpg";
import image16 from "./assest/马驹桥.jpg";
import image17 from "./assest/南磨房.jpg";
import image18 from "./assest/蒲黄榆.jpg";
import image19 from "./assest/十里河.jpg";
import image20 from "./assest/宋家庄.jpg";
import image21 from "./assest/同济南路.jpg";
import image22 from "./assest/温都水城.jpg";
import image23 from "./assest/西单.jpg";
import image24 from "./assest/协和.jpg";
import image25 from "./assest/永泰庄.jpg";
import image26 from "./assest/来广营.jpg";
import "./App.css";

const { Search } = Input;
const { Meta } = Card;

const ImageGallery = () => {
  const [data, setData] = useState([]); // 数据列表
  const [filteredData, setFilteredData] = useState([]); // 过滤后的数据列表
  const [searchValue, setSearchValue] = useState(""); // 搜索关键字
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    // 设置默认显示的第一组数据
    setData([
      { name: "八里庄", imageUrl: image1 },
      { name: "北京大学", imageUrl: image2 },
      { name: "北京西站", imageUrl: image3 },
      { name: "财智大厦", imageUrl: image4 },
      { name: "常营", imageUrl: image5 },
      { name: "次渠", imageUrl: image6 },
      { name: "翠屏西路", imageUrl: image7 },
      { name: "观音寺", imageUrl: image8 },
      { name: "华普", imageUrl: image9 },
      { name: "回龙观西大街", imageUrl: image10 },
      { name: "建外", imageUrl: image11 },
      { name: "酒仙桥", imageUrl: image12 },
      { name: "来广营", imageUrl: image26 },
      { name: "梨园", imageUrl: image13 },
      { name: "六里桥", imageUrl: image14 },
      { name: "潞河", imageUrl: image15 },
      { name: "马驹桥", imageUrl: image16 },
      { name: "南磨房", imageUrl: image17 },
      { name: "蒲黄榆", imageUrl: image18 },
      { name: "十里河", imageUrl: image19 },
      { name: "宋家庄", imageUrl: image20 },
      { name: "同济南路", imageUrl: image21 },
      { name: "温都水城", imageUrl: image22 },
      { name: "西单", imageUrl: image23 },
      { name: "协和", imageUrl: image24 },
      { name: "永泰庄", imageUrl: image25 },
    ]);
  }, []);

  useEffect(() => {
    // 根据关键字筛选数据
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchValue, data]);

  useEffect(() => {
    const filteredValue = searchValue.replace(/[^\u4e00-\u9fa5]/g, ""); // 过滤非中文字符
    setDisplayValue(filteredValue);
  }, [searchValue]);

  const handleChange = (e) => {
    const chineseValue = e.target.value.replace(/[^\u4e00-\u9fa5]/g, ""); // 正则表达式过滤非中文
    setSearchValue(chineseValue);
  };
  return (
    <div className="continer">
      <h1>魏家凉皮粉丝群</h1>
      <Search
        placeholder="请输入您要查找的门店名称"
        value={displayValue}
        onChange={handleChange}
        style={{ marginBottom: 16 }}
      />
      <List
        dataSource={filteredData}
        style={{
          overflow: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        renderItem={(item) => (
          <List.Item>
            <Card
              className="card"
              hoverable
              title={item.name}
              style={{ marginLeft: 10, marginRight: 10, marginBottom: 10 }}
              cover={
                <Image
                  alt={item.name}
                  src={item.imageUrl}
                  style={{ objectFit: "cover", overflow: "cover" }}
                />
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ImageGallery;
