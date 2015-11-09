Como testar rapidamento o projeto no android
=========================================================

Um tutorial sobre como fazer para testar no android. Vou passo a passo desdo começo, colocando alguns pontos que eu posso lembro que podem dar problema.

Esse tutorial esta utilizando linux em linha de comando para fazer todos os procedimentos, não testei em outras plataformas, mas deve funcionar igualmente bem.

Também preste atenção as dependencias de programas. Como não se tem um dos poucos programas que eu menciono aqui, você tem que ver como instalar na sua distribuição ou sistema.

Baixando o SDK do android
=========================================================

Para gerar pacotes para o android, você precisa ter o SDK do android. Para isso entre nesse link:

```
https://developer.android.com/sdk/index.html?hl=i
```

O que você vai fazer o download depende da plataforma que você esta usando. Varia se for para linux ou para windows, e se for 64 ou 32 bits, mas baixe o pacote certo.

Na data de elaboração deste tutorial, o arquivo que eu baixei foi o ```android-sdk_r23.0.2-linux.tgz```.

Descompacte o arquivo, e execute:

```shell
android-sdk-linux/tools/android
```

Você tem que instalar varios pacotes para a plataforma que você usa. Isso pode variar da versão do android que se tem disponivel... Como é uma parte bem longa, veja isso na documentação oficial:

```
https://developer.android.com/sdk/installing/index.html?pkg=tools
```

Colocando o ADB no PATH
---------------------------------------------------------

Para que o crodova tenha acesso ao SDK de forma adequada, você tem que colocar ele no seu PATH. Existem varias maneiras de se fazer isso, mas vamos mostrar como fazer localmente para o seu usuario, que deve funcionar para todos os linux, se você usa o bash também, claro.

Se você ainda não fez isso, basta inserir no final do arquivo ```${HOME}/.bashrc``` :

```shell
export PATH="${PATH}:${HOME}/android-sdk-linux/platform-tools/:${HOME}/android-sdk-linux/tools/"
```

Lembresse que o SDK deve ter sido extraido no seu "${HOME}" para que isso de certo, caso contrario, corrija os caminhos.

Testando se funciona
---------------------------------------------------------

Se estiver funcionando, o comando ```adb shell``` vai mostrar um shell para você executar comandos no seu android diretamente.

Se não, podem existir varios motivos para não funcionar, o mais comum é permissão. Existe varias formas de resolver, procurando na internet, mas esse link ensina muito:

http://stackoverflow.com/questions/14460656/android-debug-bridge-adb-device-no-permissions

Mas, o mais comum/facil/paleativo é iniciar como root o adb:

```shell
sudo adb kill-server
sudo adb start-server
```

Baixando o codigo do repositorio
=========================================================

Vamos usar o git para baixar o codigo do repositorio.

```shell
git clone https://github.com/psychomantys/epic-rpg-editor.git
```

Isso vai criar uma pasta chamada ```epic-rpg-editor```. Entre nela, os proximos passos seram feitos nessa pasta.

```shell
cd epic-rpg-editor
```

Configurando o ambiente
=========================================================

Para ter acesso a um ambiente de desenvolvimento com todas as ferramentas e bibliotecas que precisamos, temos executar o comando:

```shell
npm install
```

No final provavelmente você vai ter o ambiente totalmente completo.

Configurando PATH do ambiente
---------------------------------------------------------

Para que você tenha acesso aos aplicativos instalados no ambiente, você tem que colocar no PATH eles, ou usar apenas o npm. Usar o npm não é uma solução pratica, então vou mostrar como colocar no PATH para apenas o seu usuario, muito semelhante ao que aconteceu no ADB.

Se você ainda não fez isso, basta inserir no final do arquivo ```${HOME}/.bashrc``` :

```shell
export PATH="${PATH}:./node_modules/.bin/:${HOME}/node_modules/.bin/"
```

Iniciando no android
=========================================================

Ativando o modo de desenvolvimento
---------------------------------------------------------
Feito tudo isso, estamos quase lá.

Precisamos ativar o modo de desenvolvedor para rodar diretamente no nosso dispositivo. Siga os passos do link:

http://developer.android.com/tools/device.html

Adicionando a plataforma android no cordova
---------------------------------------------------------

Também tem que ser adicionado a possibilidade de gerar um pacote para o android no cordova.

Isso é importante porque não se pode gerar para todas as plataformas, então você tem que adicionar a plataforma que você que gerar naquele momento. E o seu ambiente tem que suportar gerar para aquela plataforma, se não o cordova vai reclamar. Para mais detalhes, veja a documentação do cordova, mas no nosso caso basta executar:

```shell
cordova platform add android
```

Ou, caso você não tenha configurado o PATH correto no seu sistema:

```shell
./node_modules/.bin/cordova platform add android
```

Instalando e executando a versão de debug
---------------------------------------------------------

Com:

* android aceitando o modo de desenvolvimento
* adicionado a plataforma android no cordova 
* O celular conectado no computador

Para instalar e rodar o aplicativo, basta apenas executar:

```shell
npm start
```

Toques finais
---------------------------------------------------------

Deve esta tudo certo, mas lembresse agora que esse não é o procedimento para gerar uma versão final(ver o outro documento sobre como gerar a versão alinhada e assinada em modo release) e o icone do aplicativo não fica o que foi escolhido, para isso veja o script ```tools/gen_android_icon.sh```.

