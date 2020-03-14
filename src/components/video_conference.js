import React from 'react'
import './video_conference.css'
import VideoPlayer from './camera'
//import VideoPlayer from "./video_player";

function video_conference () {
  return (
    <div className='video_conference'>
      <div id='ViaYou_VC_Dashboard'>
        <svg className='footerMenuRibbon'>
          <rect
            fill='rgba(62,57,53,1)'
            id='footerMenuRibbon'
            rx='0'
            ry='0'
            x='0'
            y='0'
            width='1372'
            height='109'
          ></rect>
        </svg>
        <div id='Video_Chat'>
          {/*<div id="sandwich">
                    <canvas id="main" style={{ background: "rgba(0,0,0,0.002)", width: "100%", height: "100%" }}></canvas>
                    <canvas id="draft" style={{ background: "rgba(0,0,0,0.002)", width: "100%", height: "100%" }}></canvas>
  </div>*/}
          <div id='calls_list'>
            <div id='video_call'>
              <svg className='btnVideoCall'>
                <ellipse
                  fill='rgba(0,101,254,1)'
                  id='btnVideoCall'
                  rx='29'
                  ry='29'
                  cx='29'
                  cy='29'
                ></ellipse>
              </svg>
              <div id='facetime_button'>
                <svg className='Path_2702' viewBox='0 73.09 25.251 18.036'>
                  <path
                    fill='rgba(255,255,255,1)'
                    id='Path_2702'
                    d='M 24.7008171081543 73.61116027832031 C 24.5787181854248 73.56427764892578 24.4613094329834 73.54074096679688 24.34848403930664 73.54074096679688 C 24.09480857849121 73.54074096679688 23.88367652893066 73.63016510009766 23.71444129943848 73.80852508544922 L 18.03586959838867 79.47309112548828 L 18.03586959838867 77.14815521240234 C 18.03586959838867 76.0301513671875 17.63897132873535 75.07448577880859 16.84517478942871 74.2806396484375 C 16.05133056640625 73.48689270019531 15.09575366973877 73.08999633789063 13.97765636444092 73.08999633789063 L 4.058014869689941 73.08999633789063 C 2.940263986587524 73.08999633789063 1.984392404556274 73.48689270019531 1.190497040748596 74.2806396484375 C 0.3968981206417084 75.07448577880859 -4.754035032306092e-08 76.0301513671875 -4.754035032306092e-08 77.14815521240234 L -4.754035032306092e-08 87.06793975830078 C -4.754035032306092e-08 88.18583679199219 0.3968981206417084 89.14147186279297 1.19054651260376 89.93527221679688 C 1.984441757202148 90.72906494140625 2.940313577651978 91.12596893310547 4.058064460754395 91.12596893310547 L 13.97775363922119 91.12596893310547 C 15.09580326080322 91.12596893310547 16.05142593383789 90.72906494140625 16.84527397155762 89.93527221679688 C 17.63906669616699 89.14147186279297 18.03596878051758 88.18589782714844 18.03596878051758 87.06793975830078 L 18.03596878051758 84.728759765625 L 23.71454048156738 90.40739440917969 C 23.8837718963623 90.58570098876953 24.09490966796875 90.67506408691406 24.34858703613281 90.67506408691406 C 24.4614086151123 90.67506408691406 24.57881546020508 90.65158081054688 24.70091438293457 90.60478973388672 C 25.06746101379395 90.44503784179688 25.25051116943359 90.16801452636719 25.25051116943359 89.77348327636719 L 25.25051116943359 74.44271850585938 C 25.2503662109375 74.04798889160156 25.06731224060059 73.77091979980469 24.7008171081543 73.61116027832031 Z'
                  ></path>
                </svg>
              </div>
            </div>
            <div id='call'>
              <svg className='btnAudioCall'>
                <ellipse
                  fill='rgba(254,0,0,1)'
                  id='btnAudioCall'
                  rx='29'
                  ry='29'
                  cx='29'
                  cy='29'
                ></ellipse>
              </svg>
              <div id='call_answer'>
                <div id='Group_2651'>
                  <div id='Group_2650'>
                    <svg className='Path_2703' viewBox='0 0 25.251 25.193'>
                      <path
                        fill='rgba(255,255,255,1)'
                        id='Path_2703'
                        d='M 24.68444442749023 19.92678451538086 L 20.7848949432373 16.02680397033691 C 20.00817680358887 15.25320434570313 18.72191619873047 15.27670860290527 17.91814041137695 16.08077621459961 L 15.95353031158447 18.04495048522949 C 15.82940769195557 17.97654151916504 15.70093536376953 17.90508651733398 15.5658597946167 17.82927894592285 C 14.32522964477539 17.1418628692627 12.62721729278564 16.19967269897461 10.84041213989258 14.41156005859375 C 9.048309326171875 12.6196756362915 8.105252265930176 10.91905307769775 7.415729999542236 9.677624702453613 C 7.34296989440918 9.546104431152344 7.273255825042725 9.419299125671387 7.204412460327148 9.298877716064453 L 8.522953033447266 7.982295989990234 L 9.171196937561035 7.333252906799316 C 9.976207733154297 6.528026103973389 9.998405456542969 5.242130279541016 9.22350025177002 4.466282844543457 L 5.323954105377197 0.5658647418022156 C 4.549049854278564 -0.2088941037654877 3.262210369110107 -0.1853901743888855 2.457200765609741 0.6198368668556213 L 1.358174800872803 1.725173950195313 L 1.388207674026489 1.7549889087677 C 1.019689202308655 2.225212574005127 0.7117443680763245 2.767544031143188 0.4825811684131622 3.352385282516479 C 0.2713359296321869 3.909080266952515 0.1398155391216278 4.440311908721924 0.07967741042375565 4.972632884979248 C -0.435232549905777 9.241351127624512 1.515447735786438 13.14263820648193 6.809342861175537 18.43660736083984 C 14.12711524963379 25.75387001037598 20.0242805480957 25.20109367370605 20.27868843078613 25.17410659790039 C 20.8327693939209 25.10787582397461 21.36378288269043 24.97548294067383 21.9034309387207 24.76590919494629 C 22.48319435119629 24.5394287109375 23.0251636505127 24.23191833496094 23.49510192871094 23.86419868469238 L 23.51911163330078 23.88553047180176 L 24.63249778747559 22.79528045654297 C 25.43584060668945 21.99019622802734 25.45898628234863 20.7038688659668 24.68444442749023 19.92678451538086 Z'
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div id='mute'>
              <svg className='btnMicMute'>
                <ellipse
                  fill='rgba(225,225,225,1)'
                  id='btnMicMute'
                  rx='29'
                  ry='29'
                  cx='29'
                  cy='29'
                ></ellipse>
              </svg>
              <div id='mute_microphone'>
                <div id='Group_2652'>
                  <svg
                    className='Path_2704'
                    viewBox='38.639 43.349 7.442 8.268'
                  >
                    <path
                      fill='rgba(0,0,0,1)'
                      id='Path_2704'
                      d='M 46.08109664916992 46.85138702392578 L 46.08109664916992 43.3489990234375 L 38.63899993896484 50.79164123535156 C 39.40264892578125 51.31205749511719 40.32421112060547 51.61685180664063 41.31562042236328 51.61685180664063 C 43.94338226318359 51.61685180664063 46.08109664916992 49.47914886474609 46.08109664916992 46.85138702392578 Z'
                    ></path>
                  </svg>
                  <svg
                    className='Path_2705'
                    viewBox='27.264 45.715 14.029 14.067'
                  >
                    <path
                      fill='rgba(0,0,0,1)'
                      id='Path_2705'
                      d='M 40.74071502685547 45.71500396728516 L 39.79154205322266 45.71500396728516 C 39.48675155639648 45.71500396728516 39.23937225341797 45.96237182617188 39.23937225341797 46.26716613769531 L 39.23937225341797 48.2077522277832 C 39.23937225341797 51.60357284545898 36.47661590576172 54.36661529541016 33.08052062988281 54.36661529541016 C 31.79563140869141 54.36661529541016 30.6015739440918 53.97043609619141 29.61319732666016 53.29485321044922 L 28.16514015197754 54.742919921875 C 29.27968978881836 55.59435272216797 30.61013031005859 56.17219161987305 32.05404663085938 56.35385894775391 L 32.05404663085938 57.72874450683594 L 27.8161735534668 57.72874450683594 C 27.51137924194336 57.72874450683594 27.26400756835938 57.97611999511719 27.26400756835938 58.28091812133789 L 27.26400756835938 59.22953414916992 C 27.26400756835938 59.53432846069336 27.51137924194336 59.78170013427734 27.8161735534668 59.78170013427734 L 38.34542846679688 59.78170013427734 C 38.65021896362305 59.78170013427734 38.89759063720703 59.53432846069336 38.89759063720703 59.22953414916992 L 38.89759063720703 58.28091812133789 C 38.89759063720703 57.97611999511719 38.65021896362305 57.72874450683594 38.34542846679688 57.72874450683594 L 34.10726928710938 57.72874450683594 L 34.10726928710938 56.35385894775391 C 38.13642501831055 55.84641647338867 41.29260635375977 52.26811599731445 41.29260635375977 48.2077522277832 L 41.29260635375977 46.26716613769531 C 41.29288482666016 45.96209716796875 41.04550933837891 45.71500396728516 40.74071502685547 45.71500396728516 Z'
                    ></path>
                  </svg>
                  <svg className='Path_2706' viewBox='9.082 0 21.673 23.352'>
                    <path
                      fill='rgba(0,0,0,1)'
                      id='Path_2706'
                      d='M 30.31002044677734 2.124181985855103 C 29.71754837036133 1.531432151794434 28.75539970397949 1.531432151794434 28.16292190551758 2.124181985855103 L 24.68427276611328 5.602827548980713 L 24.68427276611328 4.765744209289551 C 24.68427276611328 2.137709856033325 22.54656410217285 -1.550557300333821e-07 19.91852951049805 -1.550557300333821e-07 C 17.29049682617188 -1.550557300333821e-07 15.15278816223145 2.137709856033325 15.15278816223145 4.765743255615234 L 15.15278816223145 15.13376426696777 L 13.89605903625488 16.39049339294434 C 13.80854034423828 15.97830104827881 13.75967407226563 15.5517520904541 13.75967407226563 15.1138858795166 L 13.75967407226563 13.17329978942871 C 13.75967407226563 12.86850452423096 13.51230430603027 12.62113189697266 13.2075080871582 12.62113189697266 L 12.25861358642578 12.62113189697266 C 11.95381546020508 12.62113189697266 11.70644569396973 12.86850452423096 11.70644569396973 13.17329978942871 L 11.70644569396973 15.1138858795166 C 11.70644569396973 16.12710952758789 11.90688133239746 17.10913848876953 12.26468467712402 18.0218677520752 L 9.526771545410156 20.7595043182373 C 8.933744430541992 21.35252952575684 8.933744430541992 22.31412887573242 9.526771545410156 22.90715217590332 C 9.82300853729248 23.20339012145996 10.21173286437988 23.35164833068848 10.60045623779297 23.35164833068848 C 10.98918151855469 23.35164833068848 11.37763023376465 23.20339012145996 11.67414283752441 22.90715217590332 L 30.30974578857422 4.271554946899414 C 30.9033203125 3.678528547286987 30.9033203125 2.71720814704895 30.31002044677734 2.124181985855103 Z'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <svg className='mainMenuRibbon'>
            <rect
              fill='rgba(0,0,0,1)'
              id='mainMenuRibbon'
              rx='0'
              ry='0'
              x='0'
              y='0'
              width='1366'
              height='57'
            ></rect>
          </svg>
          <div id='userName'>
            <span>Michael Max</span>
          </div>
          <div id='currentTime'>
            <span>10:30 AM</span>
          </div>
          <div id='Add_User'>
            <svg className='btnAddUser'>
              <ellipse
                fill='rgba(255,255,255,1)'
                id='btnAddUser'
                rx='15'
                ry='15'
                cx='15'
                cy='15'
              ></ellipse>
            </svg>
            <div id='_'>
              <span>+</span>
            </div>
            <div id='Add__New_User'>
              <span>
                Add <br />
                New User
              </span>
            </div>
          </div>
          <div id='Add_User_cu'>
            <svg className='Ellipse_680_cv'>
              <ellipse
                fill='rgba(255,255,255,1)'
                id='Ellipse_680_cv'
                rx='15'
                ry='15'
                cx='15'
                cy='15'
              ></ellipse>
            </svg>
            <img id='ID1123247_200' src='ID1123247_200.png' />
            <img id='ID1123247_200_cx' src='ID1123247_200_cx.png' />
          </div>
          <div id='lblCountry'>
            <span>- Australia</span>
          </div>
          <div id='annotationHolder'>
            <svg className='btnPen'>
              <rect
                fill='transparent'
                stroke='rgba(248,137,41,1)'
                strokeWidth='1px'
                strokeLinejoin='miter'
                strokeLinecap='butt'
                strokeMiterlimit='4'
                shapeRendering='auto'
                id='btnPen'
                rx='4'
                ry='4'
                x='0'
                y='0'
                width='50'
                height='52'
              ></rect>
            </svg>
            <div id='Group_11674'>
              <div id='P'>
                <span>P</span>
              </div>
              <div id='Pen'>
                <span>Pen</span>
              </div>
            </div>
            <svg className='btnSizeUp'>
              <rect
                fill='transparent'
                stroke='rgba(248,137,41,1)'
                strokeWidth='1px'
                strokeLinejoin='miter'
                strokeLinecap='butt'
                strokeMiterlimit='4'
                shapeRendering='auto'
                id='btnSizeUp'
                rx='4'
                ry='4'
                x='0'
                y='0'
                width='51'
                height='52'
              ></rect>
            </svg>
            <div id='Group_11673'>
              <div id='__c'>
                <span>+</span>
              </div>
              <div id='Size_Up'>
                <span>Size Up</span>
              </div>
            </div>
            <svg className='btnSizeDown'>
              <rect
                fill='transparent'
                stroke='rgba(248,137,41,1)'
                strokeWidth='1px'
                strokeLinejoin='miter'
                strokeLinecap='butt'
                strokeMiterlimit='4'
                shapeRendering='auto'
                id='btnSizeDown'
                rx='4'
                ry='4'
                x='0'
                y='0'
                width='52'
                height='52'
              ></rect>
            </svg>
            <div id='Group_11672'>
              <div id='__da'>
                <span>-</span>
              </div>
              <div id='Size_Down'>
                <span>Size Down</span>
              </div>
            </div>
            <svg className='btnHighlighter'>
              <rect
                fill='transparent'
                stroke='rgba(248,137,41,1)'
                strokeWidth='1px'
                strokeLinejoin='miter'
                strokeLinecap='butt'
                strokeMiterlimit='4'
                shapeRendering='auto'
                id='btnHighlighter'
                rx='4'
                ry='4'
                x='0'
                y='0'
                width='51'
                height='52'
              ></rect>
            </svg>
            <div id='Group_11675'>
              <div id='H'>
                <span>H</span>
              </div>
              <div id='Highlight'>
                <span>Highlight</span>
              </div>
            </div>
            <svg className='btnText'>
              <rect
                fill='transparent'
                stroke='rgba(248,137,41,1)'
                strokeWidth='1px'
                strokeLinejoin='miter'
                strokeLinecap='butt'
                strokeMiterlimit='4'
                shapeRendering='auto'
                id='btnText'
                rx='4'
                ry='4'
                x='0'
                y='0'
                width='52'
                height='52'
              ></rect>
            </svg>
            <div id='Group_11676'>
              <div id='T'>
                <span>T</span>
              </div>
              <div id='Text'>
                <span>Text</span>
              </div>
            </div>
          </div>
          <video
            className='participantVideo'
            id='participantVideo'
            autoPlay
            controls
          ></video>
          <div id='Group_11667'>
            <div id='Mask_Group_68'>
              <svg
                style={{
                  width: 'inherit',
                  height: 'inherit',
                  overflow: 'visible'
                }}
              >
                <rect
                  fill='url(#Mask_Group_68_eq_pattern)'
                  width='100%'
                  height='100%'
                ></rect>
                <pattern
                  elementid='Mask_Group_68_eq'
                  id='Mask_Group_68_eq_pattern'
                  x='0'
                  y='0'
                  width='100%'
                  height='100%'
                >
                  <image
                    x='0'
                    y='0'
                    width='100%'
                    height='100%'
                    href='Mask_Group_68_eq_pattern.png'
                    href='Mask_Group_68_eq_pattern.png'
                  />
                </pattern>
              </svg>
            </div>
            <svg className='Path_8594' viewBox='0 0 129.815 129.815'>
              <path
                fill='transparent'
                stroke='rgba(46,173,60,1)'
                strokeWidth='2px'
                strokeLinejoin='miter'
                strokeLinecap='butt'
                strokeMiterlimit='4'
                shapeRendering='auto'
                id='Path_8594'
                d='M 0 0 L 129.8148956298828 0 L 129.8148956298828 129.8150329589844 L 0 129.8150329589844 L 0 0 Z'
              ></path>
            </svg>
          </div>
          <div id='Group_11668'>
            <div id='Mask_Group_69'>
              <svg
                style={{
                  width: 'inherit',
                  height: 'inherit',
                  overflow: 'visible'
                }}
              >
                <rect
                  fill='url(#Mask_Group_69_er_pattern)'
                  width='100%'
                  height='100%'
                ></rect>
                <pattern
                  elementid='Mask_Group_69_er'
                  id='Mask_Group_69_er_pattern'
                  x='0'
                  y='0'
                  width='100%'
                  height='100%'
                >
                  <image
                    x='0'
                    y='0'
                    width='100%'
                    height='100%'
                    href='Mask_Group_69_er_pattern.png'
                    href='Mask_Group_69_er_pattern.png'
                  />
                </pattern>
              </svg>
            </div>
            <svg className='Rectangle_3878'>
              <rect
                fill='transparent'
                stroke='rgba(46,173,60,1)'
                strokeWidth='2px'
                strokeLinejoin='miter'
                strokeLinecap='butt'
                strokeMiterlimit='4'
                shapeRendering='auto'
                id='Rectangle_3878'
                rx='0'
                ry='0'
                x='0'
                y='0'
                width='130'
                height='130'
              ></rect>
            </svg>
          </div>
          <div id='Group_11669'>
            <div id='Mask_Group_70'>
              <svg
                style={{
                  width: 'inherit',
                  height: 'inherit',
                  overflow: 'visible'
                }}
              >
                <rect
                  fill='url(#Mask_Group_70_es_pattern)'
                  width='100%'
                  height='100%'
                ></rect>
                <pattern
                  elementid='Mask_Group_70_es'
                  id='Mask_Group_70_es_pattern'
                  x='0'
                  y='0'
                  width='100%'
                  height='100%'
                >
                  <image
                    x='0'
                    y='0'
                    width='100%'
                    height='100%'
                    href='Mask_Group_70_es_pattern.png'
                    href='Mask_Group_70_es_pattern.png'
                  />
                </pattern>
              </svg>
            </div>
            <svg className='Rectangle_3879'>
              <rect
                fill='transparent'
                stroke='rgba(46,173,60,1)'
                strokeWidth='2px'
                strokeLinejoin='miter'
                strokeLinecap='butt'
                strokeMiterlimit='4'
                shapeRendering='auto'
                id='Rectangle_3879'
                rx='0'
                ry='0'
                x='0'
                y='0'
                width='130'
                height='130'
              ></rect>
            </svg>
          </div>
        </div>
        <div id='cboVCMode'>
          <svg className='Rectangle_34'>
            <rect
              fill='rgba(255,255,255,1)'
              id='Rectangle_34'
              rx='5'
              ry='5'
              x='0'
              y='0'
              width='75'
              height='24'
            ></rect>
          </svg>
          <svg className='Rectangle_36'>
            <rect
              fill='rgba(255,255,255,1)'
              id='Rectangle_36'
              rx='5'
              ry='5'
              x='0'
              y='0'
              width='79'
              height='24'
            ></rect>
          </svg>
          <svg className='Rectangle_35'>
            <rect
              fill='rgba(255,255,255,1)'
              id='Rectangle_35'
              rx='5'
              ry='5'
              x='0'
              y='0'
              width='82'
              height='24'
            ></rect>
          </svg>
          <div id='Facilitator_'>
            <span>Facilitator </span>
          </div>
          <img id='ID1123247_200_ej' src='ID1123247_200_ej.png' />
        </div>
      </div>
    </div>
  )
}

export default video_conference
