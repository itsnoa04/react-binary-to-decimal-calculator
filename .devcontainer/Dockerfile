# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

COPY ./.zshrc /home/node/.zshrc
COPY ./.gitconfig /home/node/.gitconfig
# Uses "robbyrussell" theme (original Oh My Zsh theme), with no plugins
# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"


# [Optional] Uncomment if you want to install more global node modules
RUN su node -c "npm install -g pnpm"
RUN git config --global --add safe.directory /workspaces/react-binary-to-decimal-calculator