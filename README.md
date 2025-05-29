
*** permission needed: companyAdmin ***
/new-user  
{email, companyDomain, password} 

*** permission needed: superAdmin ***
/onboarding 
{name, domain}

*** permission needed: companyAdmin ***
/new-credentials
{companyName, tokens}
tokens:{
  service:
  access_token:
  refresh_token:
  expires_at:
}

*** permission needed: companyAdmin ***
/new-imap-credentials
{company:
user:
imapHost:
imapPort:
emailAddress:
plainPassword:
}

*** permission needed: none ***
/login
{
  email:
  password:
  companyDomain:
}


*** permission needed: developer ***
/create-admin
{
  userName:
  password:
}


*** permission needed: superAdmin ***
/create-company-admin
{
  company:
  email:
  password:
}






## Creating super_admin ##
run: ts-node src/utils/generateToken.ts
copy the token from the console
insert the token as bearer in postman
use the "create-admin" endpoint


