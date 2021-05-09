class HumusBalancesController < ActionController::Base
  skip_forgery_protection

  CONSECUTIVE_YEARS_MODIFIER = 1.3

  def get_balances
    fields_data = params[:_json]
    return unless fields_data.present?

    humus_balances = fields_data.map { |field| { field_id: field[:id], humus_balance: calculate_balance(field[:crops])}}
    render json: humus_balances
  end

  private

  def calculate_balance(crops_data)
    sorted_crops = crops_data.sort_by { |crop| crop[:crop][:year] }
    balance = 0

    sorted_crops.each_with_index do |crop, index|
      prev_years_crop = crops_data[index - 1][:crop] unless index.zero?
      current_crop = crop[:crop]

      yearly_humus = current_crop[:humus_delta]
      yearly_humus *= CONSECUTIVE_YEARS_MODIFIER if current_crop == prev_years_crop

      balance += yearly_humus
    end
    balance.round(2)
  end
end
