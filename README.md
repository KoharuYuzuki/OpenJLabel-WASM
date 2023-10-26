# OpenJLabel-WASM
OpenJLabelのWASMビルドです  

## ビルド
Dockerを使用してビルドします  
```
# DockerでWASMをビルド
$ docker-compose build --no-cache
$ docker-compose up -d
$ docker-compose run app bash
$ /workspace/build-wasm.sh
$ exit
$ docker-compose down

# WASMをNPMパッケージにビルド
$ npm install
$ npm run build
```

## ライセンス
Copyright (c) 2023 KoharuYuzuki  
MIT License (https://opensource.org/license/mit/)  

## サードパーティーライセンス
ThirdPartyNotices.txt をお読みください  
