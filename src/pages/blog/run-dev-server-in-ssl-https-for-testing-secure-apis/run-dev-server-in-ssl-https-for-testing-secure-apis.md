---
slug: '/blog/how-to-run-rails-development-mode-in-ssl-https-for-testing-secure-apis'
path: '/blog/how-to-run-rails-development-mode-in-ssl-https-for-testing-secure-apis'
date: '2020-11-05'
title: 'How to: Run Rails Development Mode in SSL/HTTPS for Testing Secure Apis'
readtime: '60 min read'
tags: 'Rails'
---

Sometimes we might need to test an Api in HTTPS on our local network using another device like a phone or tablet. We could deploy our App to a our preferred cloud service that provides free HTTPS encryption, but in order to debug or iterate, we would need to deploy our app after every change. Not only is that not efficient, but it is prone to build errors. Luckily we can generate our own `SSL Certificate` using the [OPENSSL Library](https://www.openssl.org/)

1. add the following line to `development.rb`

```ruby
#development.rb
.
.
.
config.force_ssl = true
.
.
.
```

2. Navigate to the root of the project and **run the following command** to generate an SSL certificate (may need to install OPENSSL)

```bash
openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -keyout localhost.key -out localhost.crt
```

3. Start the rails server with parameters that includes the SSL certificate `0.0.0.0` tells the server to run at our base ip `192.16…`

```bash
rails s -b 'ssl://0.0.0.0?key=./localhost.key&cert=./localhost.crt'
```

4. Go into the command line and find the IP address for the machine that is running the development server

```bash
ifconfig | grep inet
>>
.
.
.
#inet 192.168.5.5 netmask 0xffffff00 broadcast 192.168.0.555 // this line #192.168.5.5
.
.
.

```

5. Now this url will allow us to access our app via our local network using a different device.

```
https://192.168.5.5:3000
```

The browser will say that it doesn't trust the site. Go to advanced and then 'continue anyway'

Hopefully all of that worked.

## Test local server in HTTP Only

`rails s -b 0.0.0.0`

set the base request url to be `'http://192.168.5.5:3000`/

### Recover from forced SSL (Chrome)

1. Make sure that `config.force_ssl` is commented out
2. Make sure that the development server is **not running!**
3. navigate to `chrome://net-internals/#hsts` in chrome
4. in the last field `Delete domain security policies` add the following lines:
   1. localhost
   2. localhost:3000
   3. https://localhost
   4. https://localhost:3000
5. Navigate to `chrome://settings/clearBrowserData` in chrome and delete everything from `all time`
6. Close chrome
7. Restart dev server
8. Restart chrome
9. Hopefully it works now.
