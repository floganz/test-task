class ListsController < ApplicationController

  def create
    @list = List.new list_params
    if @list.save
      render :status => 200,
       :json => { :success => true,
                  :info => "created",
                  :campaign => @list
       } 
    else
      render :status => 501,
       :json => { :success => false,
                  :info => "create fail",
       }
    end  
  end

  def update
    @list = List.update params[:id], list_params
    if @list.save
      render :status => 200,
       :json => { :success => true,
                  :info => "edited",
                  :campaign => @list
       } 
    else
      render :status => 501,
       :json => { :success => false,
                  :info => "edit fail",
       }
    end 
  end

  def destroy
    @list = List.find params[:id]
    if @list.destroy
      render :status => 200,
       :json => { :success => true,
                  :info => "deleted",
       } 
    else
      render :status => 501,
       :json => { :success => false,
                  :info => "delete fail",
       }
    end 
  end

  def list_params
    params.require(:list).permit(:name)
  end
end
