---
slug: '/blog/how-to-one-time-passwords-in-rails'
path: '/blog/how-to-one-time-passwords-in-rails'
date: '2020-11-05'
title: 'How to: One Time Passwords in Rails'
readtime: '60 min read'
tags: 'Rails, Security'
---

#### installation

1. install gems:

```ruby
# Gemfile

# for one time passwords
gem 'rotp'
gem 'active_model_otp'
```

2. `bundle install`
3. add `otp_secret_key` to the model:

```ruby
#bundle exec rails g migration add_otp_secret_key_to_users

# migration
class AddOtpSecretKeyToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :washers, :otp_secret_key, :string
  end
end

```

4. add `has_one_time_password` to model file

```ruby
#User.rb

class User < ApplicationRecord
  has_one_time_password`
  .
  .
  ...
end
```

#### how to authenticate OTP (console)

When the model is created, the otp_secret_key is saved.

1. To generate a new one time password, you must run `user.otp_code`. This is the code you send to the user in an email or sms.
2. To authenticate the code in your controller, use `user.authenticate_otp(user.otp_code, drift: 1000)` the `drift` property specifies how much time you want the code to valid for in `seconds` so `7_200` for `2 hours`. the default amount of time is 30 seconds

```ruby
user.otp_code # =>'146546'

#less than 30 seconds later
user.authenticate_otp('146546') # => 1605629250 (it was authenticated)
sleep 30.seconds
user.authenticate_otp('146546') # => nil (it was not authenticated)
user.authenticate_otp('146546', drift: 7_200) # => 1605629250 (it was authenticated)
```
