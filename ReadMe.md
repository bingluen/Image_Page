#開發環境
  + Node.js (io.js)
    + React-tools
    + browserify
  + Ruby
    + compass
    + sass
  + Git

#編輯器推薦
  大家可以採用自己喜歡的Editor，如果想跟我一起用Atom的可以參考這裡。

  <a href="https://atom.io/">Atom官方網站</a>

  下載後直接安裝即可

  ###Package安裝
  從

    File > Setting > Install

  進行安裝

  只要在搜尋框輸入套件名稱即可

  推薦安裝清單
  + css-snippet (css語法提示)
  + docblockr (寫註解用)
  + emmet (HTML自動補結束tag)
  + nuclide (Facebook官方開發的React package、搜尋nuclide-installer)
  + react (自動幫react排版)


  #####emmet設定
    File > Setting > Pacakges > emmet > View Code

  會開啟pacakge的所在位置

  在目錄放入此檔案

  https://github.com/emmetio/emmet/blob/master/lib/snippets.json



#安裝Node.js
  (這裡安裝io.js為主)

  官方網站  https://iojs.org/zh-tw/index.html

  安裝檔案下載
  + Windows 32

    https://iojs.org/dist/v2.3.3/iojs-v2.3.3-x86.msi

  + Windows 64

    https://iojs.org/dist/v2.3.3/iojs-v2.3.3-x64.msi
  + Mac

    https://iojs.org/dist/v2.3.3/iojs-v2.3.3.pkg

基本上下一步大法即可

###安裝Nodejs Package
  React-tools

    npm install react-tools -g

  browserify

    npm install browserify -g


#安裝Ruby
  Ruby中文網站 https://www.ruby-lang.org/zh_tw/

  Windows 可以用 <a href="http://rubyinstaller.org/">Ruby installer</a>，Mac則已經內建。

###安裝pacakge

  安裝Sass

    gem install sass

  安裝compass

    gem install compass

#重要編譯指令

###Sass, Scss自動編譯

  開啟command line，在專案目錄底下執行。保持command line不關閉的狀況下，只要檔案存檔就會自動轉換。

    compass watch

###React JSX自動轉換
  開啟command line，在專案目錄底下執行。保持command line不關閉的狀況下，只要檔案存檔就會自動轉換。

    jsx --watch --extension jsx react_component/ react_build/

###Browserify 打包JS（React component）
  開啟command line，在專案目錄底下執行。
  每次變更完記得要執行這個指令，js重新打包後網頁才會出現剛剛寫的component。

    browserify react_build/main.js > js/bundle.js
