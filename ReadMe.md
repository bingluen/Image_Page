#開發環境
  + Node.js (io.js)
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

#安裝Ruby
  Ruby中文網站 https://www.ruby-lang.org/zh_tw/

  Windows 可以用 <a href="http://rubyinstaller.org/">Ruby installer</a>，Mac則已經內建。

###安裝pacakge

  安裝Sass

    gem install sass

  安裝compass

    gem install compass

#安裝Git
  Windows可以透過Git官方網站取得安裝程式

  https://git-scm.com/

  Mac使用者請先安裝Xcode即可使用git
  P.S.Git在Mac上需具有管理權限才能使用，記得先將帳戶設定密碼，搭配Sudo使用

#編譯方法
  輸入

    npm install
    npm run gulp build

  就可以自動編譯。

  完成品只包含 **js/, img/, css/, index.html and favicon.icon** 三個資料夾，兩個檔案。

#一起動手打造官方網站

##Fork專案

#####首先，將整個專案Fork到自己的Github
![Fork it](http://i.imgur.com/qpGSigb.png "How To fork")

#####轉到自己的Github之後，copy一下Clone URL
![Clone URL](http://i.imgur.com/7dKTV6Q.png "Where is clone URL")

開啟command line，切換到要儲存專案的地方，輸入

    git clone [clone URL]

以我自己為例會輸入

    git clone https://github.com/erickson-makotoki/Image_Page.git

  請從自己的github上面clone，不然無法進行後面的pull Request。

  Pull request是Github提供的一個專案管理方法，幫助彙整專案，但可以讓專案管理者，決定要接受哪些commit的一個方法

##修改專案後
  記得修改後先透過下方編譯指令進行編譯。

  這邊會簡單介紹會使用到的指令，其他的Git教學可以參考這裡：http://backlogtool.com/git-guide/tw/

  首先可以透過 ``git status`` 指令來觀察，哪些檔案已經被git追蹤，且被修改過，或者哪些檔案還沒被追蹤。

  要把已經修改過得檔案，或是還沒追蹤的檔案加入，輸入

      git add [file name/path name]

  在使用資料夾作為add路徑時，請注意有沒有同時把多餘的檔案add進去了，例如sass或JSX transform compile產生的cache。

  之後透過 ``git commit`` 幫這次的變更加入註解

      git commit -m'訊息'

  最後push到 Github上

      git push

## Pull Request
  當修改好的程式碼，可以透過pull request要求合併回ITAC的github上。

  ![Pull Request](http://i.imgur.com/RF93r4C.png)

  接著會看到這個畫面，點選一下Create pull request

  ![Create pull request](http://i.imgur.com/Y3whEUB.png)

  接著你可以寫一些訊息，例如你修改了什麼

  ![open pull request](http://i.imgur.com/S9nNDVZ.png)

  看到這部份表示已經送出Pull Request了。

  ![Finish pull requests](http://i.imgur.com/vbeLBBI.png)
