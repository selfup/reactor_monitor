class StatsController < ApplicationController
  respond_to :json

  def index
    respond_with Stat.all
  end

  def create
    respond_with Stat.create(idea_params)
  end

  private

  def reactor_params
    params.permit(:running, :power_out, :power_in, :resources_left, :up_time,
                  :down_time, :time_until_out_of_fuel)
  end
end
