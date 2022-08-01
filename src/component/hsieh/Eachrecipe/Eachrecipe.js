import React from 'react'
import './Eachrecipe.css'
import dish from './../pic/image/1.dishimage.jpg'
import heart from './../pic/icon/1.heart.svg'
import good from './../pic/icon/2.good.svg'
import clock from './../pic/icon/3.clock.png'
import heat from './../pic/icon/4.heat.png'
import portion from './../pic/icon/11.portion.png'
import pot from './../pic/icon/12.pot.png'
import degree from './../pic/icon/13.degree.png'
import line from './../pic/icon/14.line.png'
import twitter from './../pic/icon/15.twitter.png'
import ig from './../pic/icon/16.ig.png'
import fb from './../pic/icon/17.fb.png'
import email from './../pic/icon/18.email.png'

function Eachrecipe() {
  return (
    <>
      <h2 className="recipetitle">金沙蒜醬焗烤明蝦 (澎湖野生大明蝦)</h2>
      <hr className="line" align="center" />

      <div className="recipeinfo">
        <div className="pic">
          <img src={dish} alt="" />
        </div>
        <div className="recipedetail">
          <div className="auther">
            <p>作者：XXX</p>
            <div className="likeandcollect">
              <button className="buttonineach">
                <img src={heart} alt="" className="iconineach" />
              </button>

              <button className="buttonineach">
                <img src={good} alt="" className="iconineach" />
              </button>
            </div>
          </div>

          {/* 分隔線 */}

          <div className="recipeinfomation">
            <div className="recipedata">
              <div className="greencircle">
                <img src={clock} alt="" />
              </div>
              <div>
                <p>
                  料理所需時間
                  <br />約 20 分鐘
                </p>
              </div>
            </div>

            {/* 分隔線 */}

            <div className="recipedata">
              <div className="greencircle">
                <img src={heat} alt="" />
              </div>
              <div>
                <p>
                  熱量
                  <br />約 600 大卡
                </p>
              </div>
            </div>

            {/* 分隔線 */}

            <div className="recipedata">
              <div className="greencircle">
                <img src={portion} alt="" />
              </div>
              <div>
                <p>
                  份量
                  <br />4 人份
                </p>
              </div>
            </div>

            {/* 分隔線 */}

            <div className="recipedata">
              <div className="greencircle">
                <img src={pot} alt="" />
              </div>
              <div>
                <p>
                  料理類型
                  <br />
                  台灣料理
                </p>
              </div>
            </div>

            {/* 分隔線 */}

            <div className="recipedata">
              <div className="greencircle">
                <img src={degree} alt="" />
              </div>
              <div>
                <p>
                  料理難易度
                  <br />
                  新手輕鬆入門
                </p>
              </div>
            </div>

            {/* 分隔線 */}

            <div>
              <p>
                來自水質清澈的沙質海底，「澎湖野生大明蝦」肉質Q彈鮮脆，而且非常鮮甜，隻隻肥美、蝦膏濃郁，是老饕的最愛。搭配鹹蛋黃做成的金沙蒜醬，只要焗烤一下，口味香濃的宵夜立即上桌。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 分隔線 */}

      <div className="socialmedia">
        <button className="buttonineach">
          <img src={line} alt="" className="iconineach" />
        </button>

        <button className="buttonineach">
          <img src={twitter} alt="" className="iconineach" />
        </button>

        <button className="buttonineach">
          <img src={ig} alt="" className="iconineach" />
        </button>

        <button className="buttonineach">
          <img src={fb} alt="" className="iconineach" />
        </button>

        <button className="buttonineach">
          <img src={email} alt="" className="iconineach" />
        </button>
      </div>

      {/* 分隔線 */}

      <div className="gray">
        <div className="cook">
          <div className="material">
            <div className="black">使用食材</div>
            <div className="showarea1">
              <div>
                <p className="character1">
                  澎湖野生大明蝦 4隻 <br />
                  焗烤起司絲 10g <br />
                  金沙蒜醬 <br />
                  鹹蛋黃 3顆 <br />
                  米酒 2匙 <br />
                  大蒜 2瓣 <br />
                  美乃滋 2匙 <br />
                  檸檬汁 1匙
                </p>
              </div>
            </div>
          </div>

          {/* 分隔線 */}

          <div className="cooking">
            <div className="green">
              <p className="character">料理方式</p>
            </div>
            <div className="showarea2">
              <div className="number">1</div>
              <div className="character2">
                料理前，將明蝦以流水沖5分鐘即可退冰，更能完整保持野生大明蝦Q彈鮮脆的肉質。
              </div>
            </div>
            <div className="showarea2">
              <div className="number">2</div>
              <p className="character2">
                退冰後的澎湖野生大明蝦，取一把剪刀，從蝦頭和蝦身的間隙，剪開蝦背。
              </p>
            </div>
            <div className="showarea2">
              <div className="number">3</div>

              <p className="character2">將腸泥取出丟掉，大明蝦就處理完成。</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonlist">
        <button className="list">食譜列表</button>
        <button className="create">新增食譜</button>
        <button className="update">修改食譜</button>
        <button className="delete">刪除食譜</button>
      </div>
    </>
  )
}

export default Eachrecipe
