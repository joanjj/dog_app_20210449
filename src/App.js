import React from 'react';

function Dog({name, picture}) {
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
  );
}

const dogILike=[
  {
    name:'Miniature Schnauzer',
    image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxNzA4MDdfMzgg%2FMDAxNTAyMDk3ODg0MDA2.JFQirjfJza537o2Ls5TbuGop5tiyuJ3OsyEZCN5M-PUg.vbKA5zv5Fjka-RS9bSp7aKjKhVQlGVX-thPNakq_Ax8g.JPEG.mmm9706%2FKakaoTalk_20170807_150009191.jpg&type=sc960_832',

  },
  {
    name:'Poodle',
    image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMjRfMzIg%2FMDAxNjQyOTk1MTU0Nzk4.yjh55dpfXervdVDn-ZI5WHprXDK-4roB5vdSokoifdog.BG8EZjSzdJ3qTDx2cT44g_7OwBOjTzhbEdle14r0zZgg.JPEG.eunjung5592%2FIMG_5539.jpg&type=sc960_832',

  },
  {
    name:'Shiba Inu',
    image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMDNfMTAw%2FMDAxNjE0NzUwMTk2MzEw.324_I99BgCGi6ER0tF2DwrATTZWQiL1UeFQ9OZWWO4Yg.rR1jq_P__rDx_PoyDvr7lIwc8cIO4qQiS6hFf3Gxggsg.JPEG.wogusdl202%2FIMG_2284.JPG&type=sc960_832',

  },
  {
    name:'Chihuahua',
    image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjVfMTYw%2FMDAxNjIxOTE0MDk5OTA2.3VKf4ULfK7J_1Y4eqgSQfDjgozdo82AhYiiXirzDTDcg.y_r8DR4Mzmpm1HHSyQ63HQAh2uwo96xofefkEI2XEscg.JPEG.yaonga_mungmung%2FKakaoTalk_20210524_142651790_01.jpg&type=sc960_832',

  },
  {
    name:'Dobermann Pinscher',
    image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMzBfMjc1%2FMDAxNjQwODE2MzI4NDMy.S24kxOLooZZrnboVtxxO5SDEsFCREhOMLvl1VqjZlVEg.v4duDhDuHnEu_09OT2unTopBSfSMzvgjZC5A3JttyYsg.JPEG.adorable_sy97%2F1640785091552%25A3%25AD8.jpg&type=sc960_832',

  },
];

function App() {
  return (
  <div>
  {dogILike.map(dish=>(<Dog name={dish.name} picture={dish.image}/>))}
  </div>
  );
}

export default App;
