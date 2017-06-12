# fda - Ops

A set of [Ansible](www.ansible.com) playbooks to provision and deploy AWS [CloudFormation](https://aws.amazon.com/cloudformation) stacks and [Lambda](https://aws.amazon.com/lambda) functions

## Create / Update stack

- Edit config on `group_vars/all.yml`
- Run `make fda env=<aws_profile>`

make sure `aws_profile` exists on `~/.aws/credentials`
