class PlaybooksController < ApplicationController

  before_action :require_login

  def index
    @playbooks = current_user.playbooks.all
    respond_to do |format|
      format.html
      format.json { render json: @playbooks.to_json }
    end
  end

  def show
    @playbook = Playbook.find_by(id: params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @playbook }
    end
  end

  def new
    @playbook = Playbook.new
  end

  def create
    @playbook = current_user.playbooks.build(playbook_params(:name, :description, :situation))
    if @playbook.save
      # redirect_to user_playbook_path current_user, @playbook
      # now, render json back
      render json: @playbook
    else
      render 'new'
    end
  end

  def destroy
    playbook = Playbook.find_by(id: params[:id])
    playbook.destroy
    redirect_to user_playbooks_path current_user
  end

  def update
  end

  private

  def playbook_params(*args)
    params.require(:playbook).permit(*args)
  end
  
  def require_login
    return head(:forbidden) unless logged_in?
  end

end
