//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Planner.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class adminAssign
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public adminAssign()
        {
            this.userAssigns = new HashSet<userAssign>();
        }
    
        public int assignmentID { get; set; }
        public int courseID { get; set; }
        public string assignment { get; set; }
        public System.DateTime startDate { get; set; }
        public System.DateTime endDate { get; set; }
    
        public virtual Class Class { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<userAssign> userAssigns { get; set; }
    }
}
