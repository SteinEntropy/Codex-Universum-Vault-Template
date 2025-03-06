---
tags:
  - plugin
Links:
  - "[[Obsidian Community Plugins]]"
  - "[[AI in Obsidian]]"
Created: 2023-06-02T05:58:04
Description: Have personalized AI to find smart connections and have a chatbot based on your notes 🤯
---
> [!WARNING] Setup Required
> I disabled the plugin in the vault for now, if you want to use it just enable it in the settings

> [!TIP] Video Example
> ![Video](https://youtu.be/xHY3OHUNOrQ?si=_isujrZbJpYTJN2T)
## How it works

- First, the notes in your vault get broken up into different blocks based on its headings.
- Next, to determine the relevance of each block, each one is sent to OpenAI, which generates an embedding for that particular block, a set of values that describe its characteristics across different dimensions. In this case, it's described across different dimensions (for reference, [[#OpenAI]] small embeddings are 1536)
- ![](https://i.imgur.com/iglEJOZ.jpeg)
- Once the embeddings are calculated for each block, they are stored in a hidden file within your Obsidian vault.
- So when you are asking the app to find similar connections to a block, it will find other blocks with similar values for each of the parameters, and this relevance is expressed through a percentage.
	- It's like finding the nearest dot on a graph, except the graph is 1536 dimensions big.
- This is really powerful since it can find similarities in dimensions that we might not be consciously thinking of, allowing for even crazier connections
## Features

### Customization
#### Included notes
- Can exclude/include notes for different contexts
  - Maybe you are looking for everything so you keep it set to all
  - Maybe you are looking for certain memories so you are looking for
#### Embedding type
*Found in "Embedding Models" section of settings*

Two main ways embeddings can be generated
##### Local
- Less dimensions to measure your notes
- Cheaper as you don't have to pay OpenAI per embedding you generate
- Requires good device specs. If your specs aren't good enough for the embeddings you are trying to generate it will continuously fail to generate.
##### OpenAI
- More dimensions (I haven't done an objective comparison but when I use [[#Relatedness View]] the results feel more specific)
- Costs money to generate
	- 165,000 word and 460 notes - $0.17 USD to create embeddings
	- Can see pricing [here](https://platform.openai.com/docs/guides/embeddings)

You will need to set up your OpenAI API key
- If you don't know how to get one, you can create an OpenAI account then go to https://platform.openai.com/account/api-keys
- Create a new secret key, then copy and paste it into the vault settings
##### Opinions
It seems like the price for generating embeddings is low so I personally generate embeddings.

If you use multiple devices with different specs, using online embeddings might be better 
### Relatedness View
- Can see what sections of your notes are most relevant

### Chat View
- Can use your vault as the database for notes
- Can save chats just like ChatGPT

## Wishes
- Quote embeds would be part of the note, since it's a core part of my input process
	- I don't think it's worth yet as I can just copy paste the content of the note, but it is unfortunate lol