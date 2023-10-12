using System.Text.Json;

public class WeekDataService
{
    private readonly HttpClient _http;

    public WeekDataService(HttpClient http)
    {
        _http = http;
    }

    public async Task<WeekData> GetWeekDataAsync(int weekNumber)
    {
        try
        {
            var json = await _http.GetStringAsync($"data/week{weekNumber}.json");
            return JsonSerializer.Deserialize<WeekData>(json);
        }
        catch (HttpRequestException)
        {
            // Handle the case where the file doesn't exist
            return null;
        }
    }
}
