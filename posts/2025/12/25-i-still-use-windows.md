---
title: "I Still Use Windows"
date: "2025-12-25"
excerpt: "Why I chose to stick with Windows and WSL instead of switching to Linux full-time, despite being a software engineer who loves the terminal."
image: "/images/2025/12/25-i-still-use-windows.png"
tags: ["tech", "lifestyle"]
---

# I Still Use Windows

I'm a software engineer, and of course I like using the terminal to command the computer. When I was studying at university, I attended a Unix lecture and I felt COOL when I used the terminal. Wow, that was like being a hacker. I could do anything using only the terminal, for example, navigate through directories, open files, edit files, and more. Since then, I started learning commands on Unix, learned VIM, and tried to do many things using the terminal, just because it looked COOL.

But at the same time, I still wanted to use a GUI. I liked Windows GUI; it's easy to use and I had been familiar with it since I was young.

So I researched if there was anything that I could use out there, and I found Linux. Linux is a Unix-like operating system which has a similar shell and tools that I could use in the terminal and also provides a GUI for me to use, and of course it's FREE. I tried many distros, for example, Ubuntu, Mint, Fedora, Debian, Arch (BTW). Then I found that there were downsides to those Linux distributions that made me go back to using Windows all the time after I installed them and used them for a while.

## 1. Linux can't play Full HD streaming on Netflix

Yes, that was the main reason for me. I mostly used my computers instead of using an iPad or smartphone for watching streaming content because the screens were bigger, and that really satisfied me. After I used Linux for a while, my eyes realized that the resolution was not that good. I researched and found that Netflix doesn't support Full HD streaming on Linux. That annoyed me a lot, and it made me miss Windows so much. My eyes were happy when they were watching videos in Full HD resolution.

You might wonder, why didn't I use other streaming platforms? Well, yeah, some platforms can play full HD streaming on Linux, but the content they provided wasn't what I liked.

## 2. Sound quality is not that good

Similar to above. Sound on my headphones or speakers was just better on Windows. I knew that maybe there were ways to set up Linux to make the sound quality better, but it wasn't that easy. I needed to read many documents, blogs, or even ask AIs. But I still couldn't make the sound as good as Windows. I had good headphones, so I expected to have good sound quality. But Linux couldn't give me that.

## 3. Wireless connection issues

Nowadays, people are using wireless devices such as speakers, mice, keyboards, and many other things. Linux has poor support for wireless. I wasn't sure what the reason was, but it happened many times when I installed Linux on my PC or my old laptop. Sometimes, the Bluetooth daemon was running but didn't connect to the Bluetooth devices automatically, so I needed to manually click it or even write a bash script to connect them every time my computer started. Sometimes, the Bluetooth daemon was not even running. This kind of problem manifested differently on different distros.

In my opinion, this is just a lack of device drivers or support which happens in the open source world. The companies that built those devices didn't even think about supporting Linux, because that's not the main target of their customers.

## 4. NVIDIA Graphics Support

I sometimes had issues with NVIDIA when installing Linux Mint or KDE distros. I got a black screen when booting. Many users report the same thing: it's NVIDIA issues, blah blah.

Yes, now NVIDIA has open-sourced some of their driver code, and open source developers out there are working hard to make NVIDIA graphics cards work smoothly on Linux, but there is still a long way to go.

If you want to use Linux, don't use NVIDIA. That's what many people say on the internet.

## What do I use now?

Windows, of course, with WSL as an environment for development. I found a balance using Windows with WSL, which runs Linux as a subsystem on Windows. This allows me to still use the GUI, and at the same time I can also use a Unix-like terminal on WSL.

I think WSL isn't as smooth compared to the native terminal on Linux itself. But it's good enough for me to use the terminal for developing projects in my free time. Developing with Linux commands in the terminal—and that's pretty cool.

---

*Published: 25 Dec 2025*
