using System;
using DatingApp.API.Models;

namespace DatingApp.API.Dto
{
    public class MessageToReturnDTO
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public string SenderKnownAs { get; set; }
        public string SenderPhotoURL { get; set; }
        public int ReceiverId { get; set; }
        public string ReceiverKnownAs { get; set; }
        public string ReceiverPhotoURL { get; set; }
        public string Content { get; set; }
        public bool IsRead { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime? MessageSent { get; set; }
        
    }
}