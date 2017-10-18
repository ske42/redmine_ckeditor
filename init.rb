require 'redmine'
require 'redmine_ckeditor'

Rails.application.config.to_prepare do
  RedmineCkeditor.apply_patch
end

Redmine::Plugin.register :redmine_ckeditor do
  name 'Redmine CKEditor plugin'
  author 'Akihiro Ono'
  description 'This is a CKEditor plugin for Redmine'
  version '1.1.5'
  requires_redmine :version_or_higher => '3.0.0'
  url 'http://github.com/a-ono/redmine_ckeditor'

  settings(:partial => 'settings/ckeditor')

  wiki_format_provider 'CKEditor', RedmineCkeditor::WikiFormatting::Formatter,
    RedmineCkeditor::WikiFormatting::Helper
end

class CKEditorSpoilerHookListener < Redmine::Hook::ViewListener
  def view_layouts_base_html_head(context)
    javascript_include_tag('spoiler.js', :plugin => :redmine_ckeditor) + 
    stylesheet_link_tag('spoiler.css', :plugin => :redmine_ckeditor)
  end
end


Loofah::HTML5::WhiteList::ALLOWED_PROTOCOLS.replace RedmineCkeditor.allowed_protocols
