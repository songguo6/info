# EOS钱包导入格式（WIF）私钥生成过程

#### 1、[随机生成256位二进制数](https://www.jisuan.mobi/puB1Bu6H33m3myWS.html)

1010001100110111000001010010011111001111100010110111001011100101100000110011111101011001100100000101001100011101110110100010000110001100001100001010110110110111001101011000011111101110001011010101110111101011110100010111100111101100001000101101101010001011

#### 2、256位二进制数转为64位十六进制

python hex(int('1010001100110111000001010010011111001111100010110111001011100101100000110011111101011001100100000101001100011101110110100010000110001100001100001010110110110111001101011000011111101110001011010101110111101011110100010111100111101100001000101101101010001011',2))

原始私钥（32字节）：
a3370527cf8b72e5833f5990531dda218c30adb73587ee2d5debd179ec22da8b

#### 3、添加前缀0x80

80a3370527cf8b72e5833f5990531dda218c30adb73587ee2d5debd179ec22da8b

#### 4、对上一步结果值的二进制数进行sha256运算

python hashlib.sha256(s).digest()

f017c469c63da0524a273aee7557a3c238ee3f3360e82ba0e2799d5beafc129c

#### 5、对上一步结果值的二进制数进行sha256运算

0a3f8a2df7096cb51c6816a65685813153aebf691fa11f12ad7e91072ee1f5d9

#### 6、取上一步结果值的前4字节作为检验和（checksum）

0a3f8a2d

#### 7、把checksum添加到第3步结果值末尾

80a3370527cf8b72e5833f5990531dda218c30adb73587ee2d5debd179ec22da8b0a3f8a2d

#### 8、对上一步结果值进行[base58](https://www.npmjs.com/package/bs58)编码

WIF私钥：
5K4AgqVQY98vCYtPK9xbT99ui3FgLFp3j5Vso1dFuVmaVPuppD2

# EOS公钥生成过程

#### 1、[椭圆曲线加密算法（ECC）](https://zhuanlan.zhihu.com/p/36326221)

一条椭圆曲线就是一组被 y^2 = x^3+ax+b 定义的且满足 4a^3+27b^2 != 0 的点集。

[椭圆曲线乘法和椭圆曲线加法](https://www.jianshu.com/p/eece4117cb63)  

椭圆曲线乘法：kP = P+P+P+...+P（k次）  
椭圆曲线加法：在椭圆曲线上取一点P(Xp,Yp)，再取一点Q(Xq,Yq)，连接P、Q两点作一条直线，这条直线将在椭圆曲线上交于第三点G，过G点作垂直于X轴的直线，将过椭圆曲线另一点R（一般是关于X轴对称的点），R点则被定义为P+Q的结果，既P+Q=R。

质数阶有限域：实数范围上光滑的椭圆曲线在密码学应用上并不合适，需要进行有限域下的离散化操作才能使用。

#### 2、椭圆曲线数字签名算法（ECDSA）

一种ECC，使用ECC对数字签名算法（DSA）的模拟。

#### 3、[secp256k1标准](https://en.bitcoin.it/wiki/Secp256k1)

一种特殊的椭圆曲线，比特币和EOS均使用该标准，规定：  
(1) a=0,b=7，即椭圆曲线方程为 y^2 = x^3+7  
(2) 大质数p=2^256-2^32-2^9-2^8-2^7-2^6-2^4-2^0，十六进制表示为FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE FFFFFC2F  
(3) 基准点G坐标为(79BE667E F9DCBBAC 55A06295 CE870B07 029BFCDB 2DCE28D9 59F2815B 16F81798, 483ADA77 26A3C465 5DA4FBFC 0E1108A8 FD17B448 A6855419 9C47D08F FB10D4B8)

#### 4、未压缩格式公钥（65字节）

公钥 K = k*G 是椭圆曲线上的一个坐标点，G是基准点（生成点）。  

未压缩公钥取点K(x,y)的坐标值加前缀0x04拼接而成：
04 360c18aab0eabbd8b6b26ca8032c693ed1aab28da6eb1d0472eabd8e21233816 f6a8b41be315205daefba5648e947bc106f254f56b1a40d6190cec7b9f40813d

#### 5、压缩格式公钥（33字节）

03 360c18aab0eabbd8b6b26ca8032c693ed1aab28da6eb1d0472eabd8e21233816

公钥是方程y^2=x^3+7上的一个点，知道x坐标，可以求得y坐标，因此可以只存储公钥的x坐标；  
压缩格式公钥是以0x02或0x03作为前缀，y是偶数使用02作为前缀，y是奇数使用03作为前缀。  

#### 6、对上一步结果值做二进制ripemd160哈希运算（20字节）

91c0d18cdc236906575816f05d45379e3dc01ef5

#### 7、取上一步结果值的前4字节作为检验和（checksum）

91c0d18c

#### 8、拼接压缩公钥和checksum

03360c18aab0eabbd8b6b26ca8032c693ed1aab28da6eb1d0472eabd8e2123381691c0d18c

#### 9、对上一步结果值进行base58编码

7F36SKLm2toCBrA9DWV8UHeNLpSwAW2DWYLejcSoFvrrbG3hWT

#### 10、加上前缀EOS

EOS7F36SKLm2toCBrA9DWV8UHeNLpSwAW2DWYLejcSoFvrrbG3hWT

# 非对称加密

私钥k随机生成，公钥K=k*G，公钥对外公开，私钥仅自己知道。  

#### 1、数据加密
Alice： ka*Kb -> ka*(kb*G)    Alice加密需要Bob的公钥  
Bob：   kb*Ka -> kb*(ka*G)    Bob加密需要Alice的公钥

#### 2、数字签名
签名：  m*k=N  
验证：  m*K -> m*k*G -> NG    G是常数

（以上乘法均为群乘法）

# 助记词

#### 助记词 -> 私钥
./mnemonicTool-linux -mnemonic "ask language rude digital glare thumb civil cousin urban trial lake second"

# keystore + password

#### keystore.json数据结构（Ethereum wallet v3 format）
```
{
    "address": "43a78b73a23edc878c88215d3b6c588644b54b22", 
    "crypto": {
        "cipher": "aes-128-ctr", 
        "ciphertext": "6381989b86de953ed86d1e77a808beb0e98f2fcd943c746de221d9cd9de13098", 
        "cipherparams": {
            "iv": "0caff26d3aba0d28f02a20ae503cd49e"
        }, 
        "kdf": "scrypt", 
        "kdfparams": {
            "dklen": 32, 
            "n": 4096, 
            "p": 6, 
            "r": 8, 
            "salt": "2334b3d2fe2a4e4a9aa790327e7fcb87eee18958ae5b3ba64617444f33291622"
        }, 
        "mac": "af3a38740d691b9b19a481d10a95d24fed529e04e60de69e1f11e01ab9d218d0"
    }, 
    "id": "97f1e5cb-721c-40cb-a7ab-85f381131964", 
    "version": 3
}
```

- cipher：AES（对称加密）算法；
- cipherparams：cipher算法需要的参数， iv是aes-128-ctr加密算法需要的初始化向量；
- ciphertext：使用cipher算法加密后的私钥；
- kdf：密钥生成函数，可使用password加密keystore文件；
- kdfparams：kdf函数需要的参数；
- mac：验证password的代码。

nodejs代码：
```
const Wallet = require('ethereumjs-wallet');
const fs = require('fs');

const utcFile = './keystore.json';
const password = 'mk20190820';

const myWallet = Wallet.fromV3(fs.readFileSync(utcFile).toString(), password, true);

console.log("Private Key: " + myWallet.getPrivateKey().toString('hex')); 
console.log("Address: " + myWallet.getAddress().toString('hex'));

//Address: 43a78b73a23edc878c88215d3b6c588644b54b22               
//Private Key: 791ef15d9ea8a89b48d36fbf4df0fc24d74ff74349aa10a8772e97c5a1d8d878
//WIF: 5JjdT9P1JEkWnopP9qpPVGQRkz88V3JvyZ54S3tv6PM5hBDauAK
//Public Key: EOS5xGaq22erUFYhDjnpCzG2wXbJseTgdynCzm4xR4ANMero77HFR
```










