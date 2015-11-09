Para o android
=========================================================

Gerando a versão release no Cordova
---------------------------------------------------------

Para gerar a versão release, a primeira coisa que você tem que fazer é gerar um apk em modo release do cordova.

Para isso, faça o comando:

```shell
cordova compile --release android
```

Ou, se não tiver colocado o o cordova no path:

```shell
./node_modules/.bin/cordova compile --release android
```

Ultimos retoques
---------------------------------------------------------

Como ultima parte, você tem que assinar e alinhar(tradução livre) o seu pacote.

Para isso, o script em ```tools/gen_signed_align_release.sh``` resolve o caso.

Por exemplo, usamos assim:

```shell
./tools/gen_signed_align_release.sh platforms/android/ant-build/EpicRPGEditor-release-unsigned.apk epic.apk
```

Se:

* ```platforms/android/ant-build/EpicRPGEditor-release-unsigned.apk```: For o aplicativo gerado pelo Cordova em modo release
* ```epic.apk```: For o pacote que queremos gerar
* E ele estiver com os programas nos lugares corretos e for no linux

Desculpe, mas não funciona no linux esse script, e ainda não gerei um release no windows. Mas o aplicativo em debug funciona tranquilamente, e o em modo release pode funcionar, so que ainda não foi testado.

