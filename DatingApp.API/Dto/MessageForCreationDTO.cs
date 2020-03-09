using System;

namespace DatingApp.API.Dto
{
    public class MessageForCreationDTO
    {
        public int SenderId { get; set; }
        public int ReceiverId { get; set; }
        public DateTime MessageSent { get; set; }
        public string Content { get; set; }
        public MessageForCreationDTO()
        {
            MessageSent = DateTime.Now;
        }
    }
}