using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;

namespace Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private readonly ITodoService _service;

    public TodosController(ITodoService service) => _service = service;

    [HttpGet]
    public ActionResult<IEnumerable<TodoItem>> Get() => Ok(_service.List());

    public record CreateTodoDto(string Title);

    [HttpPost]
    public ActionResult<TodoItem> Post([FromBody] CreateTodoDto dto)
    {
        var created = _service.Create(dto.Title);
        return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
    }

    [HttpDelete("{id:guid}")]
    public IActionResult Delete(Guid id)
    {
        var ok = _service.Remove(id);
        return ok ? NoContent() : NotFound();
    }
}
