---
slug: "/blog/simple-jwt-auth-for-rails-apis"
path: "/blog/simple-jwt-auth-for-rails-apis"
date: "2020-10-03"
title: "Simple JWT Token Auth for Rails Apis"
description: "How to: Simple JWT Token Authentication System for Rails Apis"
readtime: "20 min read"
thumbnail: "./preview-card.png"
tags: "Rails, JWT"
---

1. `gem 'jwt'`

2. `bundle install`

3. Create an api controller that all of the api related controllers will inherit from

```ruby
class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_default_format

  private

  def set_default_format
    request.format = :json
  end
end
```

4. Create a blacklist model for the token's JTI attribute

```ruby
class CreateJwtBlacklists < ActiveRecord::Migration[5.2]
  def change
    create_table :jwt_blacklist do |t|
      t.string :jti, null: false
      t.datetime :exp, null: false
    end
    add_index :jwt_blacklist, :jti
  end
end
```

5. Create two seperate `secret_key_base`s to encode both the token itself and the jti attribute of the token

1. Generate a secret key with `rails secret` in the console
1. Add those keys to rails secret credentials file with `EDITOR=nano rails credentials:edit`

1. Create a json_web_token service object (model that doesn't inherit from base or have a column in the database associated with it) and instantiate the constants for the secret keys we just created

```ruby
class JsonWebToken
  API_KEY_BASE = Rails.application.credentials.api[:secret_key_base]
  JTI_SECRET = Rails.application.credentials.api[:jti_secret]
end
```
