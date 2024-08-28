# Miau Proxy Manager Simples

Miau Proxy Manager Simples é uma extensão para o Google Chrome que permite gerenciar perfis de proxy facilmente. Com esta extensão, você pode adicionar, ativar, excluir e desativar proxies de maneira simples e eficiente diretamente do seu navegador.

## Funcionalidades

- Adicionar novos perfis de proxy com nome, host, porta e cor personalizados.
- Ativar perfis de proxy diretamente do popup.
- Excluir perfis de proxy.
- Desativar o proxy atual.

## Como Usar

1. **Adicionar um Novo Perfil de Proxy:**
   - Abra a extensão clicando no ícone da extensão na barra de ferramentas do Chrome.
   - Preencha o formulário com o nome do perfil, host, porta e cor.
   - Clique em "Add Profile" para salvar o perfil.

2. **Ativar um Perfil de Proxy:**
   - Selecione o perfil que deseja ativar na lista suspensa.
   - Clique em "Activate Profile" para ativar o proxy selecionado.

3. **Excluir um Perfil de Proxy:**
   - Selecione o perfil que deseja excluir na lista suspensa.
   - Clique em "Delete Profile" para removê-lo.

4. **Desativar o Proxy:**
   - Clique em "Disable Proxy" para desativar o proxy atual.

## Arquivos Principais

- `manifest.json`: Define as permissões e os arquivos usados pela extensão.
- `background.js`: Contém o script que gerencia as configurações de proxy em segundo plano.
- `popup.html`: Interface do usuário da extensão, onde você pode gerenciar os perfis de proxy.
- `popup.css`: Estilos para a interface do usuário.
- `popup.js`: Script que gerencia as interações do usuário com a interface da extensão.

## Imagens de Ícone

- `icon16.png`: Ícone de 16x16 pixels para a barra de ferramentas do Chrome.
- `icon48.png`: Ícone de 48x48 pixels.
- `icon128.png`: Ícone de 128x128 pixels.

## Permissões

Esta extensão requer as seguintes permissões:

- `proxy`: Para gerenciar as configurações de proxy do Chrome.
- `storage`: Para salvar e recuperar os perfis de proxy armazenados localmente.
- `tabs`: Para manipular as abas do navegador, se necessário.

## Instalação

1. Clone o repositório ou baixe os arquivos.
2. Abra o Chrome e vá até `chrome://extensions/`.
3. Ative o "Modo do desenvolvedor" no canto superior direito.
4. Clique em "Carregar sem compactação" e selecione a pasta do projeto.
5. A extensão será carregada e estará disponível para uso.
