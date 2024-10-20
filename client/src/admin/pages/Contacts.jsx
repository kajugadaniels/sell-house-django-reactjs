import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, EllipsisVertical, KeySquare, ListChecks, PenLine, Search, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getContactMessages } from '../api';
import { toast } from 'react-toastify';

const Contacts = () => {
    const [messages, setMessages] = useState([]);
    const [filteredMessages, setFilteredMessages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [messagesPerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadMessages = async () => {
            setLoading(true);
            try {
                const data = await getContactMessages();
                setMessages(data);
                setFilteredMessages(data);
            } catch (error) {
                toast.error('Failed to load messages.');
            } finally {
                setLoading(false);
            }
        };
        loadMessages();
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term) {
            const filtered = messages.filter((message) =>
                message.name.toLowerCase().includes(term.toLowerCase()) ||
                message.email?.toLowerCase().includes(term.toLowerCase()) ||
                message.phone_number?.toLowerCase().includes(term.toLowerCase()) ||
                message.message?.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredMessages(filtered);
            setCurrentPage(1); // Reset to the first page when searching
        } else {
            setFilteredMessages(messages);
        }
    };

    const toggleDropdown = (messageId) => {
        setDropdownOpen(dropdownOpen === messageId ? null : messageId);
    };

    const handleEdit = (messageId) => {
        navigate(`/message/${messageId}`);
    };

    const handleDelete = async (messageId) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            try {
                await deleteMessage(messageId);
                setMessages(messages.filter((message) => message.id !== messageId));
                setFilteredMessages(filteredMessages.filter((message) => message.id !== messageId));
                toast.success('Message deleted successfully.');
            } catch (error) {
                toast.error('Failed to delete message.');
            }
        }
    };

    // Pagination logic
    const indexOfLastMessage = currentPage * messagesPerPage;
    const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
    const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);

    const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>Contacts</div>
    )
}

export default Contacts